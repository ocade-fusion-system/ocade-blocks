import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { terme } = attributes;

  return (
    <section
      {...useBlockProps.save()}
      itemScope
      itemType="https://schema.org/DefinedTermSet"
      id={terme.terme.replaceAll(" ", "-")}
    >
      <div
        itemScope
        itemType="https://schema.org/DefinedTerm"
        style={{
          marginBottom: "1rem",
          paddingBottom: "1rem",  // Ajouter un peu d'espace sous chaque terme
          borderBottom: "1px solid #ccc",  // Ligne de séparation
        }}
      >
        <dt itemProp="name" style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          {terme.terme}
        </dt>
        <dd itemProp="description" style={{ marginLeft: 0 }}>
          {terme.definition}
        </dd>
      </div>
    </section>
  );
}
