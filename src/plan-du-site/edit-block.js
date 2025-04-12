export default function Block(props) {
	const { blockProps } = props;

	return (
		<div {...blockProps} >
			<p>Emplacement réservé au plan du site.</p>
		</div>
	);
}
