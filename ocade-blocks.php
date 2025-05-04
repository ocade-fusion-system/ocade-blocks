<?php

/**
 * Plugin Name: Ocade Blocks Ocade Fusion
 * Theme URI: https://github.com/ocade-fusion-system/ocade-blocks
 * Author: Ocade Fusion
 * Author Name: Valentin Charrier
 * Description: Plugins de blocks Gutenberg pour le site Ocade Fusion.
 * Text Domain: ocade-blocks
 * Version: 1.0.161
 */

if (is_admin()) require_once plugin_dir_path(__FILE__) . 'inc/plugin-updater.php';

/******************* DEBUT DU PLUGIN *******************************/
/** Register PHP Loader  */
require_once(plugin_dir_path(__FILE__) . 'structure/PHP/index.php');

// Enregistre tous les fichiers CSS du dossier "styles" dans le front-end et l'éditeur Gutenberg 
function register_all_styles_folder() {
  $styles_dir = plugin_dir_path(__FILE__) . 'styles/';
  $styles_url = plugin_dir_url(__FILE__) . 'styles/';
  $css_files = glob($styles_dir . '*.css');

  foreach ($css_files as $file) {
    $file_name = basename($file);
    $handle = 'ocade-blocks-' . str_replace('.css', '', $file_name);
    $file_url = $styles_url . $file_name;

    // 🔁 Génère une version unique basée sur la date de modification du fichier
    $version = filemtime($file);

    wp_enqueue_style($handle, $file_url, array(), $version, 'all');
    wp_enqueue_style($handle . '-editor', $file_url, array(), $version, 'all');
  }
}

add_action('enqueue_block_editor_assets', 'register_all_styles_folder');
add_action('wp_enqueue_scripts', 'register_all_styles_folder');

// Chargement différé des fichiers CSS pour l'éditeur et le front-end
function ocade_blocks_defer_all_ocade_blocks_styles($tag, $handle) {
  if (str_starts_with($handle, 'ocade-blocks-')) {
    return str_replace(
      "rel='stylesheet'",
      "rel='stylesheet' media='print' onload=\"this.media='all'\"",
      $tag
    );
  }
  return $tag;
}
add_filter('style_loader_tag', 'ocade_blocks_defer_all_ocade_blocks_styles', 10, 2);

// Chargement différé des fichiers JS pour l'éditeur et le front-end
function ocade_blocks_enqueue_defer_script() {
  $script_path = plugin_dir_path(__FILE__) . 'assets/js/defer.js';
  $script_url  = plugin_dir_url(__FILE__) . 'assets/js/defer.js';

  // 🔁 Génère une version basée sur la date de modification
  $version = file_exists($script_path) ? filemtime($script_path) : null;

  wp_enqueue_script(
    'ocade-blocks-defer',
    $script_url,
    [],
    $version,
    true
  );
}

add_action('wp_enqueue_scripts', 'ocade_blocks_enqueue_defer_script');

// Ajoute l'attribut "defer" aux scripts JS chargés par le plugin
function ocade_blocks_add_defer_attribute($tag, $handle, $src) {
  if ($handle === 'ocade-blocks-defer') return '<script src="' . esc_url($src) . '" defer></script>';
  return $tag;
}
add_filter('script_loader_tag', 'ocade_blocks_add_defer_attribute', 10, 3);

// Ajouter un Script permettant de filtrer le glossaire
function ocade_enqueue_glossaire_script() {
  if (is_page(1784)) {
    // Définition du chemin du fichier JS dans le plugin
    $plugin_dir = plugin_dir_path(__FILE__);
    $plugin_url = plugin_dir_url(__FILE__);
    $js_relative_path = 'assets/js/glossaire.js';
    $js_full_path = $plugin_dir . $js_relative_path;
    $js_url = $plugin_url . $js_relative_path;

    // Utilisation de filemtime pour versionner automatiquement
    $version = file_exists($js_full_path) ? filemtime($js_full_path) : null;

    // Enregistrement du script
    wp_register_script(
      'glossaire-filter-script',
      $js_url,
      [],
      $version,
      true // chargement dans le footer
    );

    // Ajout de l'attribut async (non-bloquant)
    add_filter('script_loader_tag', 'ocade_async_glossaire_script', 10, 2);

    wp_enqueue_script('glossaire-filter-script');
  }
}
add_action('wp_enqueue_scripts', 'ocade_enqueue_glossaire_script');
function ocade_async_glossaire_script($tag, $handle) {
  if ('glossaire-filter-script' === $handle) return str_replace(' src', ' defer src', $tag);
  return $tag;
}

/****************** SUPPRIMER LES LIENS PREVIOUS NEXT REL Yoast car basé sur /page/X et non page=X **************/
add_filter('wpseo_next_rel_link', '__return_false');
add_filter('wpseo_prev_rel_link', '__return_false');

/****************** AJOUTER LES PREVIOUS NEXT PAGINATION **************/
add_action('wp_head', function () {
  global $post;

  // Détection de la pagination actuelle
  $paged = intval(get_query_var('pg'));
  if (empty($paged) || $paged < 1) $paged = 1;

  // Nombre d’articles par page (doit correspondre à ton bloc)
  $posts_per_page = 4;

  // Base URL de la page courante
  $base_url = '';

  // Détection du contexte actuel
  if (is_front_page() || is_home()) {
    // Accueil ou page blog personnalisée
    $total_posts = wp_count_posts('post')->publish;
    $base_url = get_permalink(get_option('page_on_front'));
  } elseif (isset($post) && $post instanceof WP_Post && $post->post_name === 'actualites') {
    // Page actualités personnalisée
    $total_posts = wp_count_posts('post')->publish;
    $base_url = get_permalink($post);
  } elseif (is_category()) {
    $term = get_queried_object();
    $total_posts = $term->count;
    $base_url = get_term_link($term);
  } elseif (is_tag()) {
    $term = get_queried_object();
    $total_posts = $term->count;
    $base_url = get_term_link($term);
  }

  // Calcul du nombre total de pages
  if (!empty($total_posts) && !empty($base_url)) {
    $total_pages = ceil($total_posts / $posts_per_page);
    if ($paged > 1) echo '<link rel="prev" href="' . esc_url(add_query_arg('pg', $paged - 1, $base_url)) . '">' . "\n";
    if ($paged < $total_pages) echo '<link rel="next" href="' . esc_url(add_query_arg('page', $paged + 1, $base_url)) . '">' . "\n";
  }
});
add_filter('query_vars', function ($vars) {
  $vars[] = 'pg'; // nouvelle variable de pagination
  return $vars;
});
