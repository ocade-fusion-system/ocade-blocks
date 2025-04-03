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

  const updateOption = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setAttributes({
      options: newOptions,
      orders: generateRandomOrders(newOptions.length),
    });
  };

  const addOption = () => {
    const newOptions = [...options, ""];
    setAttributes({
      options: newOptions,
      orders: generateRandomOrders(newOptions.length),
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Réglages du QCM">
          <Button onClick={addOption} variant="secondary">
            Ajouter une option
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
