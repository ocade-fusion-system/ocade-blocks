import { useBlockProps } from "@wordpress/block-editor";
import { TextControl, TextareaControl } from "@wordpress/components";

export default function Block({ attributes, setAttributes }) {
  const { terme } = attributes;

  // Mise à jour du terme ou de la définition
  const updateTerme = (field, value) => {
    setAttributes({
      terme: { ...terme, [field]: value },
    });
  };

  return (
    <div {...useBlockProps()}>
      <div
        style={{
          marginBottom: "2em",
          border: "1px solid #ccc",
          padding: "1em",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <TextControl
          label="Mot"
          value={terme.terme}
          onChange={(value) => updateTerme("terme", value)}
        />

        <TextareaControl
          label="Définition"
          value={terme.definition}
          onChange={(value) => updateTerme("definition", value)}
          rows={4}
        />
      </div>
    </div>
  );
}
