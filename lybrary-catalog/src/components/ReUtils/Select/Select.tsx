interface PropTypes {
	name: string;
	id: string;
	options: string[];
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ name, id, options, onChange }: PropTypes) {
	return (
		<>
			<select name={name} id={id} onChange={onChange}>
				{options.map((value, index) => {
					return <option key={index} value={value}>{value === "All" ? "Todos" : value}</option>;
				})}
			</select>
		</>
	);
}
