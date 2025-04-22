import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";

export default function Inspecteur({ attributes, setAttributes }) {
  const { preview } = attributes;

  return (
    <InspectorControls>
      <PanelBody title="Paramètres du bloc" initialOpen={true}>
        <ToggleControl
          label="Afficher la prévisualisation"
          checked={preview}
          onChange={(value) => setAttributes({ preview: value })}
        />
      </PanelBody>
    </InspectorControls>
  );
}
