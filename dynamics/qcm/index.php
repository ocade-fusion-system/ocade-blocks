<?php

function render_qcm($attributes) {
  $question = $attributes['question'] ?? '';
  $options = $attributes['options'] ?? [];

  if (empty($question) || empty($options)) return '';

  $qcm_id = 'qcm_' . uniqid(); // ID unique pour chaque QCM

  $wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'wp-block-ocade-blocks-qcm',
    'data-checked' => 'false',
    'tabindex' => '0',
    'data-qcm-id' => $qcm_id,
  ]);

  // Préparation des options
  $optionsSorted = [];
  foreach ($options as $index => $opt) {
    $optionsSorted[] = [
      'opt' => $opt,
      'index' => $index,
      'isBonneReponse' => $index === 0,
    ];
  }

  // Mélange des options
  shuffle($optionsSorted);

  // Création d’un tableau d’ordres aléatoires uniques
  $orderValues = range(0, count($optionsSorted) - 1);
  shuffle($orderValues);

  // Assignation de l'ordre aléatoire à chaque option
  foreach ($optionsSorted as $i => &$item) {
    $item['order'] = $orderValues[$i];
  }
  unset($item); // par précaution

  ob_start(); ?>

  <div <?php echo $wrapper_attributes; ?>>
    <p><strong><?php echo esc_html($question); ?></strong></p>
    <div class="qcm-options">
      <?php foreach ($optionsSorted as $index => $item) :
        $inputId = $qcm_id . '-opt-' . $item['index'];
        $class = 'qcm-option';
        if ($item['isBonneReponse']) $class .= ' bonne-reponse';
      ?>
        <label
          for="<?php echo esc_attr($inputId); ?>"
          class="<?php echo esc_attr($class); ?>"
          style="order: <?php echo esc_attr($item['order']); ?>;"
          tabindex="0"
          aria-describedby="qcm-instructions">
          <input
            type="radio"
            name="<?php echo esc_attr($qcm_id); ?>"
            id="<?php echo esc_attr($inputId); ?>"
            value="<?php echo esc_attr($item['opt']); ?>"
            data-correct="<?php echo $item['isBonneReponse'] ? 'true' : 'false'; ?>"
            tabindex="0" />
          <?php echo esc_html($item['opt']); ?>
        </label>
      <?php endforeach; ?>

      <div
        class="qcm-aria-feedback sr-only"
        style="order: <?php echo count($options); ?>;"
        aria-live="polite"
        aria-atomic="true"></div>
    </div>
  </div>

<?php
  $html = ob_get_clean();

  // JSON-LD – type Question seul (compatible avec la FAQ de Yoast)
  $question_json = [
    "@context" => "https://schema.org",
    "@type" => "Question",
    "name" => $question,
    "acceptedAnswer" => [
      "@type" => "Answer",
      "text" => "La bonne réponse est : " . $options[0]
    ]
  ];
  
  $html .= '<script type="application/ld+json">' . wp_json_encode($question_json, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</script>';
  
  return $html;  
}


function ocade_enqueue_qcm_index_js() {
  if (is_admin()) return;

  // Vérifie que le bloc est utilisé sur la page
  if (has_block('ocade-blocks/qcm')) {
    wp_enqueue_script(
      'ocade-qcm-index-js',
      plugins_url('index.js', __FILE__),
      [],
      '1.0',
      true
    );
  }
}
add_action('wp_enqueue_scripts', 'ocade_enqueue_qcm_index_js');

function ocade_qcm_add_defer_attribute($tag, $handle) {
  if ($handle === 'ocade-qcm-index-js') return str_replace('<script ', '<script defer ', $tag);
  return $tag;
}
add_filter('script_loader_tag', 'ocade_qcm_add_defer_attribute', 10, 2);
