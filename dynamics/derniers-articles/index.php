<?php

/**
 * Retourne une WP_Query pour les derniers articles avec filtres dynamiques.
 *
 * @param int $nombre_articles Nombre d'articles à récupérer
 * @return WP_Query
 */
function ocadefusion_get_recent_articles_query($nombre_articles = 10) {
  $args = [
    'post_type'      => 'post',
    'posts_per_page' => $nombre_articles,
    'orderby'        => 'date',
    'order'          => 'DESC',
    'post_status'    => 'publish',
  ];

  if (is_category()) {
    $category = get_queried_object();
    if ($category) $args['category__in'] = [$category->term_id];
  }

  if (is_tag()) {
    $tag = get_queried_object();
    if ($tag) $args['tag__in'] = [$tag->term_id];
  }

  return new WP_Query($args);
}

function render_derniers_articles($attributes) {
  extract($attributes);
  $wrapper_attributes = get_block_wrapper_attributes();

  $nombre_articles = 10;
  $query = ocadefusion_get_recent_articles_query($nombre_articles);

  if (!$query->have_posts()) return '';

  ob_start();
?>
  <ul <?= $wrapper_attributes; ?>>
    <?php
    $index = 0;
    while ($query->have_posts()) : $query->the_post();

      // Récupère les infos de l’image (format medium)
      $image_id = get_post_thumbnail_id();
      $image_src = wp_get_attachment_image_src($image_id, 'medium');
      $image_alt = esc_attr(get_post_meta($image_id, '_wp_attachment_image_alt', true));
    ?>
      <li>
        <article>
          <a class="figure-link" href="<?= esc_url(get_the_permalink()); ?>" aria-label="Lire l’article : <?= esc_attr(get_the_title()); ?>" rel="nofollow">
            <figure>
              <?php if ($image_src) : ?>
                <img
                  <?php
                    $img_class = ($index < 2) ? 'image-priority' : 'image-lazy';
                    $loading = ($index < 2) ? 'eager' : 'lazy';
                    $priority = ($index < 2) ? 'high' : 'low';
                  ?>
                  class="<?= $img_class; ?>"
                  src="<?= esc_url($image_src[0]); ?>"
                  width="<?= esc_attr($image_src[1]); ?>"
                  height="<?= esc_attr($image_src[2]); ?>"
                  alt="<?= $image_alt; ?>"
                  loading="<?= $loading; ?>"
                  fetchpriority="<?= $priority; ?>"
                  decoding="async">
              <?php endif; ?>
            </figure>
          </a>
          <div>
            <header>
              <span>
                <a href="<?= esc_url(get_category_link(get_the_category()[0]->term_id)); ?>" aria-label="Catégorie : <?= esc_attr(get_the_category()[0]->name); ?>">
                  <?= esc_html(get_the_category()[0]->name); ?>
                </a>
              </span>
              <time datetime="<?= get_the_date('Y-m-d'); ?>"><?= esc_html(get_the_date('d.m.Y')); ?></time>
            </header>
            <h3>
              <a href="<?= esc_url(get_the_permalink()); ?>" aria-label="Lire l’article : <?= esc_attr(get_the_title()); ?>">
                <?= esc_html(get_the_title()); ?>
              </a>
            </h3>
            <p><?= esc_html(get_the_excerpt()); ?></p>

            <?php $tags = get_the_tags(); ?>
            <?php if ($tags) : ?>
              <div class="news-tags">
                <?php foreach ($tags as $tag) : ?>
                  <a href="<?= esc_url(get_tag_link($tag->term_id)); ?>" class="news-tag"><?= esc_html($tag->name); ?></a>
                <?php endforeach; ?>
              </div>
            <?php endif; ?>

            <footer>
              <a href="<?= esc_url(get_the_permalink()); ?>" aria-label="Lire la suite de l’article : <?= esc_attr(get_the_title()); ?>" rel="nofollow">
                Lire la suite
              </a>
            </footer>
          </div>
        </article>
      </li>
    <?php $index++;
    endwhile; ?>
  </ul>
<?php
  wp_reset_postdata();
  return ob_get_clean();
}
