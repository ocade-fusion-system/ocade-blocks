<?php

function render_qcm($attributes) {
  $question = $attributes['question'] ?? '';
  $options = $attributes['options'] ?? [];
  $orders  = $attributes['orders'] ?? [];

  if (empty($question) || empty($options)) return '';

  $wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'wp-block-ocade-blocks-qcm',
    'data-checked' => 'false',
    'tabindex' => '0',
  ]);

  // Tri avec ordre et détection de la bonne réponse à index 0
  $optionsSorted = [];
  foreach ($options as $index => $opt) {
    $optionsSorted[] = [
      'opt' => $opt,
      'order' => $orders[$index] ?? $index,
      'index' => $index,
      'isBonneReponse' => $index === 0,
    ];
  }

  usort($optionsSorted, fn($a, $b) => $a['order'] <=> $b['order']);

  ob_start(); ?>

  <div <?php echo $wrapper_attributes; ?>>
    <p><strong><?php echo esc_html($question); ?></strong></p>
    <div class="qcm-options">
      <?php foreach ($optionsSorted as $index => $item) :
        $inputId = 'opt-' . $item['index'];
        $class = 'qcm-option';
        if ($item['isBonneReponse']) {
          $class .= ' bonne-reponse';
        }
      ?>
        <label
          for="<?php echo esc_attr($inputId); ?>"
          class="<?php echo esc_attr($class); ?>"
          style="order: <?php echo esc_attr($item['order']); ?>;"
          tabindex="<?php echo $index + 1; ?>"
          role="button"
          aria-describedby="qcm-instructions">
          <input
            type="radio"
            name="qcm"
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

  // Construction du balisage JSON-LD FAQ (Google rich result)
  $faq_json = [
    "@context" => "https://schema.org",
    "@type" => "FAQPage",
    "mainEntity" => [
      [
        "@type" => "Question",
        "name" => $question,
        "acceptedAnswer" => [
          "@type" => "Answer",
          "text" => "La bonne réponse est : " . $options[0]
        ]
      ]
    ]
  ];

  $html .= '<script type="application/ld+json">' . wp_json_encode($faq_json, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</script>';

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
