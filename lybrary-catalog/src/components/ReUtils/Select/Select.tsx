interface PropTypes {
	name: string;
	id: string;
	options: string[];
}

export default function Select({ name, id, options }: PropTypes) {
	return (
		<>
			<select name={name} id={id}>
				{options.map((value, index) => {
					return <option key={index} value={value}>{value}</option>;
				})}
			</select>
		</>
	);
}
