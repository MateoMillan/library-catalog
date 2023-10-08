import "./NoBookSaving.css";
import miImagen from '../../../assets/no-results.png';


export default function NoBookSaving() {
	return (
		<>
			<div className="no-book-saving">
				<img
					src={miImagen}
					alt={`book-library`}
					className="no-book-image"
					draggable="false"
				/>
				<h3 className="no-book-title">No se encontraron resultados</h3>
				<h3 className="no-book-paragraph">Prueba a guardar un libro</h3>
			</div>
		</>
	);
}
