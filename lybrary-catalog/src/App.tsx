import Div from "./components/ReUtils/Div/Div.tsx";
import TitleContainer from "./components/TitleContainer/TitleContainer.tsx";
import library from "./data/books.json";
import CatalogContainer from "./components/ReUtils/CatalogContainer/CatalogContainer.tsx";
import Saved from "./components/Saved/Saved.tsx";
import Footer from "./components/Footer/Footer.tsx";
import items from "./data/footer-items.json";
import FilterContainer from "./components/ReUtils/FilterContainer/FilterContainer.tsx";
import { useState } from "react";

interface Filter {
	pages: [number, number];
	search: string;
	genres:
		| "All"
		| "Fantasía"
		| "Ciencia ficción"
		| "Zombies"
		| "Terror"
		| string
		| undefined;
}

export default function App() {
	const initialState: Filter = {
		pages: [0, 1500],
		search: "",
		genres: "All",
	};

	const [filter, setFilter] = useState(initialState);

	const manejarDatosDesdeHijo = (dato: Filter) => {
		setFilter(dato);
	};
	
	return (
		<>
			<Div className="title-section">
				<TitleContainer />
			</Div>
			<Div className="catalog-section">
				<FilterContainer
					books={library}
					onEnviarDatos={manejarDatosDesdeHijo}
				/>
				<CatalogContainer books={library} filters={filter} />
			</Div>
			<Saved />
			<Footer items={items} />
		</>
	);
}
