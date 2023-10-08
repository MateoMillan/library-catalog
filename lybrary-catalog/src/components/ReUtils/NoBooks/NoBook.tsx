import "./NoBook.css";
import miImagen from '../../../assets/no-results.png';


export default function NoBook() {
	return (
		<>
			<div className="no-book">
				<img
					src={miImagen}
					alt={`book-library`}
					className="no-book-image"
					draggable="false"
				/>
				<h3 className="no-book-title">No se encontraron resultados</h3>
				<h3 className="no-book-paragraph">Prueba a cambiar los filtros</h3>
			</div>
		</>
	);
}
