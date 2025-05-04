<?php

/**
 * Retourne une WP_Query pour les derniers articles avec filtres dynamiques.
 *
 * @param int $nombre_articles Nombre d'articles à récupérer
 * @return WP_Query
 */
function ocadefusion_get_recent_articles_query($nombre_articles = 10) {
  $paged = intval(get_query_var('pg'));
  if (empty($paged) || $paged < 1) $paged = 1;

  $args = [
    'post_type'      => 'post',
    'posts_per_page' => $nombre_articles,
    'orderby'        => 'date',
    'order'          => 'DESC',
    'post_status'    => 'publish',
    'paged'          => $paged,
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

  $nombre_articles = 4;
  $query = ocadefusion_get_recent_articles_query($nombre_articles);

  if (!$query->have_posts()) return '';

  ob_start();
?>
  <!-- LCP LIGHOUSE -->
  <style>
    .editor-styles-wrapper .wp-block-ocade-blocks-derniers-articles {
      padding: 5rem 1rem;
      background-color: var(--wp--preset--color--violet-clair);
      text-align: center
    }

    .wp-block-ocade-blocks-derniers-articles {
      display: flex;
      justify-content: space-evenly;
      align-items: stretch;
      gap: 1rem;
      flex-wrap: wrap;
      padding-left: .5rem;
      padding-right: .5rem;
      list-style-type: none
    }

    .wp-block-ocade-blocks-derniers-articles li {
      width: 100%;
      max-width: 450px
    }

    .wp-block-ocade-blocks-derniers-articles figure {
      overflow: hidden;
      aspect-ratio: 16/9;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 450px;
      margin-bottom: 0;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, .15) 0 1px 5px
    }

    .wp-block-ocade-blocks-derniers-articles figure img {
      width: 100%;
      height: auto
    }

    .wp-block-ocade-blocks-derniers-articles .figure-link+div {
      position: relative;
      top: -2rem;
      max-width: 380px;
      min-height: 380px;
      margin-left: auto;
      margin-right: auto;
      padding: .5rem 1rem;
      background: #fff;
      border-left: 1px solid var(--wp--preset--color--gris);
      border-right: 1px solid var(--wp--preset--color--gris);
      border-bottom: 1px solid var(--wp--preset--color--gris);
      border-radius: 0 0 4px 4px
    }

    @media (min-width:460px) {
      .wp-block-ocade-blocks-derniers-articles .figure-link+div {
        margin-left: auto;
        margin-right: auto
      }
    }

    @media (min-width:1280px) {
      .wp-block-ocade-blocks-derniers-articles .figure-link+div {
        margin-left: 2rem;
        margin-right: 2rem
      }
    }

    .wp-block-ocade-blocks-derniers-articles .figure-link+div::after {
      content: "";
      position: absolute;
      top: -1.3rem;
      left: 0;
      width: calc(100% + 0px);
      height: 40px;
      background-color: #fff;
      mask-size: 216px 40px;
      mask-repeat: repeat;
      mask-position: -10px
    }

    .wp-block-ocade-blocks-derniers-articles header {
      z-index: 0;
      padding: 0;
      background-color: inherit
    }

    .wp-block-ocade-blocks-derniers-articles header a,
    .wp-block-ocade-blocks-derniers-articles header time {
      color: var(--wp--preset--color--violet);
      font-size: 1rem;
      text-decoration-thickness: 1px
    }

    .wp-block-ocade-blocks-derniers-articles h3 {
      margin-top: 1rem;
      margin-bottom: .5rem
    }

    .wp-block-ocade-blocks-derniers-articles .news-tags {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
      margin-top: 1rem
    }

    .wp-block-ocade-blocks-derniers-articles .news-tags a {
      padding: .25rem 1rem;
      color: #fff;
      background-color: var(--wp--preset--color--orange);
      border-radius: 4px;
      text-decoration-color: var(--wp--preset--color--orange)
    }

    .wp-block-ocade-blocks-derniers-articles .news-tags a:hover {
      color: var(--wp--preset--color--orange);
      background-color: var(--wp--preset--color--gris-clair)
    }

    .wp-block-ocade-blocks-derniers-articles footer {
      margin-top: 2rem;
      margin-bottom: 1rem
    }

    .wp-block-ocade-blocks-derniers-articles footer a {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
      word-spacing: 0.1rem
    }

    .wp-block-ocade-blocks-derniers-articles footer a:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-decoration-color: var(--wp--preset--color--orange)
    }

    .wp-block-ocade-blocks-derniers-articles footer a::before {
      content: "";
      position: relative;
      top: 0;
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
      background-color: var(--wp--preset--color--orange);
      mask-size: contain;
      mask-repeat: no-repeat
    }


    .pagination {
      margin-bottom: 2rem;
      text-align: center;
      width: 100%;
    }

    .pagination ul {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .pagination li {
      margin: 0;
      padding: 0;
    }

    .pagination li a,
    .pagination li span {
      display: inline-block;
      padding: 0.5rem 1rem;
      border: 1px solid var(--wp--preset--color--gris, #ccc);
      border-radius: 4px;
      text-decoration: none;
      color: inherit;
      background-color: #fff;
      transition: all 0.2s ease-in-out;
    }

    .pagination li .current {
      font-weight: bold;
      background-color: var(--wp--preset--color--violet-clair, #eee);
      pointer-events: none;
    }

    .pagination li a:hover {
      background-color: var(--wp--preset--color--gris-clair, #f2f2f2);
      border-color: var(--wp--preset--color--gris-fonce, #999);
    }

    .pagination li a:focus {
      outline: 2px solid var(--wp--preset--color--orange, orange);
      outline-offset: 2px;
    }
  </style>


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
                <?php
                // Par défaut (mobile-friendly)
                $img_class = ($index < 2) ? 'image-priority' : 'image-lazy';
                $loading = ($index < 2) ? 'eager' : 'lazy';
                $priority = ($index < 2) ? 'high' : 'low';
                ?>
                <img
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
    endwhile;
    ?>
  </ul>

  <?php
  // Récupère la page actuelle depuis la variable personnalisée "pg"
  $paged = intval(get_query_var('pg'));
  if ($paged < 1) {
    $paged = 1;
  }

  // Affiche la pagination
  echo '<nav class="pagination" aria-label="Pagination">';
  echo paginate_links([
    'base'         => add_query_arg('pg', '%#%'),
    'format'       => '',
    'current'      => $paged,
    'total'        => $query->max_num_pages,
    'prev_text'    => __('&laquo; Précédent', 'ocade'),
    'next_text'    => __('Suivant &raquo;', 'ocade'),
    'type'         => 'list',
    'show_all'     => false,
    'end_size'     => 1,
    'mid_size'     => 1,
    'add_args'     => false,
    'add_fragment' => '',
  ]);
  echo '</nav>';

  ?>

<?php
  wp_reset_postdata();
  return ob_get_clean();
}
