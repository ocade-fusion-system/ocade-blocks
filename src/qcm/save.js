import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { question = "", options = [], orders = [] } = attributes;

  if (!question || !options.length) return null;

  return (
    <div {...useBlockProps.save()} data-checked="false" data-success="false">
      <p>
        <strong>{question}</strong>
      </p>

      <div className="qcm-options">
        {options.map((opt, index) => {
          const inputId = `opt-${index}`;
          const isBonneReponse = index === 0; // ✅ première réponse renseignée

          return (
            <label
              htmlFor={inputId}
              key={index}
              className={`qcm-option${isBonneReponse ? " bonne-reponse" : ""}`}
              style={{ order: orders[index] ?? index }}
            >
              <input
                type="radio"
                name="qcm"
                id={inputId}
                value={opt}
                data-correct={isBonneReponse} // ➕ on ajoute un indicateur
                onchange={`
                  const wrapper = this.closest('.wp-block-ocade-blocks-qcm');
                  if (wrapper) {
                    wrapper.setAttribute('data-checked', 'true');
                    const success = this.dataset.correct === 'true';
                    wrapper.setAttribute('data-success', success ? 'true' : 'false');
                  }
                `}
              />
              {opt}
            </label>
          );
        })}
      </div>
    </div>
  );
}
