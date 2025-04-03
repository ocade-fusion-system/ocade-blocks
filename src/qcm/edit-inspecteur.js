import { useBlockProps } from "@wordpress/block-editor";
import { TextControl, Button, PanelBody } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export default function Inspecteur({ attributes, setAttributes }) {
  const { question, options } = attributes;

  // Génère un ordre aléatoire d'affichage
  const generateRandomOrders = (length) => {
    const indexes = Array.from({ length }, (_, i) => i);
    for (let i = indexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
    return indexes;
  };

  // Met à jour une option et recalcule l’ordre
  const updateOption = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setAttributes({
      options: newOptions,
      orders: generateRandomOrders(newOptions.length),
    });
  };

  // Ajoute une option uniquement si la dernière n'est pas vide
  const addOption = () => {
    if (options.length === 0 || options[options.length - 1].trim() !== "") {
      const newOptions = [...options, ""];
      setAttributes({
        options: newOptions,
        orders: generateRandomOrders(newOptions.length),
      });
    } else {
      alert("Veuillez remplir l’option précédente avant d’en ajouter une nouvelle.");
    }
  };

  // Réinitialise les options
  const resetOptions = () => {
    setAttributes({
      options: [""],
      orders: [0],
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Réglages du QCM" initialOpen={true}>
          <Button onClick={addOption} variant="secondary" style={{ marginBottom: "0.5rem" }}>
            ➕ Ajouter une option
          </Button>
          <Button onClick={resetOptions} variant="secondary">
            ♻️ Réinitialiser
          </Button>
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
        <TextControl
          label="Question"
          value={question}
          onChange={(val) => setAttributes({ question: val })}
        />
        {options.map((opt, i) => (
          <TextControl
            key={i}
            label={`Option ${String.fromCharCode(97 + i)}`}
            value={opt}
            onChange={(val) => updateOption(val, i)}
          />
        ))}
      </div>
    </>
  );
}
