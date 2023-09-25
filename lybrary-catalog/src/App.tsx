import Div from "./components/ReUtils/Div/Div.tsx";
import TitleContainer from "./components/TitleContainer/TitleContainer.tsx";
import library from "./data/books.json"
import CatalogContainer from "./components/ReUtils/CatalogContainer/CatalogContainer.tsx";

export default function App() {
	return (
		<>
			<Div className="title-section">
				<TitleContainer />
			</Div>
			<Div className="catalog-section">
				<CatalogContainer books={library} filters={{pages: [500, 1000], search: "", genres: "Fantasía"}}/> {/* <== Para probar */}
			</Div>
		</>
	);
}
