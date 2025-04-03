import { useBlockProps } from "@wordpress/block-editor";
import { TextControl, Button, PanelBody } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export default function Inspecteur({ attributes, setAttributes }) {
  const { question, options } = attributes;

  const updateOption = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setAttributes({ options: newOptions });
  };

  const addOption = () => setAttributes({ options: [...options, ""] });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Réglages du QCL">
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
