import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { question = "", options = [], orders = [] } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <p>
        <strong>{question}</strong>
      </p>

      <button
        onClick={`
          const container = this.closest('.wp-block-ocade-blocks-qcm');
          if (!container) {
            this.dataset.success = "false";
            this.dataset.reponse = "false";
            return;
          }
          const radios = container.querySelectorAll('input[type="radio"]');
          const selected = Array.from(radios).find(r => r.checked);
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

      <div
        className="qcl-options"
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        {options.map((opt, index) => (
          <div
            key={index}
            className="qcl-option"
            style={{
              order: orders[index] ?? index, // fallback au cas où
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <input type="radio" name="qcl" id={`opt-${index}`} value={opt} />
            <label htmlFor={`opt-${index}`}>
              {String.fromCharCode(97 + index)}) {opt}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
