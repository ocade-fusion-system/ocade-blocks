export default function Block(props) {
	const { blockProps } = props;

	return (
		<div {...blockProps} >
			<p>Emplacement réservé au QCM.</p>
		</div>
	);
}
