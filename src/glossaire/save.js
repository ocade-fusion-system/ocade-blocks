import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { terme } = attributes;

  return (
    <section
      {...useBlockProps.save()}
      itemScope
      itemType="https://schema.org/DefinedTermSet"
      id={terme.terme.replaceAll(" ", "-")}
      glossaire-term={terme.terme}
    >
      <dl itemScope itemType="https://schema.org/DefinedTerm">
        <dt itemProp="name">{terme.terme}</dt>
        <dd itemProp="description">{terme.definition}</dd>
      </dl>
    </section>
  );
}
