<?php

/**
 * Plugin Name: Ocade Blocks Ocade Fusion
 * Theme URI: https://github.com/ocade-fusion-system/ocade-blocks
 * Author: Ocade Fusion
 * Author Name: Valentin Charrier
 * Description: Plugins de blocks Gutenberg pour le site Ocade Fusion.
 * Text Domain: ocade-blocks
 * Version: 1.0.116
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
    $file_name = basename($file); // Récupère le nom du fichier (ex: "header.css")
    $handle = 'ocade-blocks-' . str_replace('.css', '', $file_name); // Création d'un handle unique
    $file_url = $styles_url . $file_name;
    wp_enqueue_style($handle, $file_url, array(), '1.0', 'all');
    wp_enqueue_style($handle . '-editor', $file_url, array(), '1.0', 'all');
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
  $script_url = plugin_dir_url(__FILE__) . 'assets/js/defer.js';
  wp_enqueue_script(
    'ocade-blocks-defer',
    $script_url,
    [],
    null,
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

