import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { question, options } = attributes;

  // Générer un ordre aléatoire
  const orders = options.map((_, index) => index);
  for (let i = orders.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [orders[i], orders[j]] = [orders[j], orders[i]];
  }

  return (
    <div {...useBlockProps.save()}>
      <p><strong>{question}</strong></p>

      <div className="qcl-options" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {options.map((opt, index) => (
          <div
            key={index}
            className="qcl-option"
            style={{ order: orders[index], display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <input type="radio" name="qcl" id={`opt-${index}`} value={opt} />
            <label htmlFor={`opt-${index}`}>
              {String.fromCharCode(97 + index)}) {opt}
            </label>
          </div>
        ))}
      </div>

      <button
        onClick={`
          const container = this.closest('.wp-block-ocade-qcl');
          const radios = container.querySelectorAll('input[type="radio"]');
          let selected = Array.from(radios).find(r => r.checked);
          if (!selected) {
            this.dataset.success = "false";
            this.dataset.reponse = "false";
            return;
          }

          const isCorrect = radios[0].checked;
          this.dataset.success = isCorrect ? "true" : "false";
          delete this.dataset.reponse;
        `}
      >
        Vérifier ma réponse
      </button>
      <p>Veuillez cocher une réponse avant de répondre.</p>
    </div>
  );
}
