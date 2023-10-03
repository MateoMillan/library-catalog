import "./NoBook.css";

export default function NoBook() {
	return (
		<>
			<div className="no-book">
				<img
					src={
						"https://us.123rf.com/450wm/bsd555/bsd5552008/bsd555200801383/153556937-no-se-encontraron-resultados-icono-de-color-rgb-problema-de-navegaci%C3%B3n-por-internet-mensaje-de.jpg"
					}
					alt={`book-library`}
					className="no-book-image"
					draggable="false"
				/>
			</div>
		</>
	);
}
