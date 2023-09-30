import Div from "./components/ReUtils/Div/Div.tsx";
import TitleContainer from "./components/TitleContainer/TitleContainer.tsx";
import library from "./data/books.json";
import CatalogContainer from "./components/ReUtils/CatalogContainer/CatalogContainer.tsx";
import Saved from "./components/Saved/Saved.tsx";
import Footer from "./components/Footer/Footer.tsx";
import items from "./data/footer-items.json";
import FilterContainer from "./components/ReUtils/FilterContainer/FilterContainer.tsx";
import { useState } from "react";

type Genre = "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror" | "All"


export default function App() {
	const [searchState, setSearchState] = useState<string>("");
	const [pagesState, setPagesState] = useState<number>(1500);
	const [genresState, setGenresState] = useState<Genre>("All");

	const manejarDatosDesdeHijo = (search: string, genre: Genre, pages: number) => {
		setSearchState(search);
		setPagesState(pages);
		setGenresState(genre);
	};

	return (
		<>
			<Div className="title-section">
				<TitleContainer />
			</Div>
			<Div className="catalog-section">
				<FilterContainer
					books={library}
					onSendData={manejarDatosDesdeHijo}
				/>
				<CatalogContainer
					books={library}
					filters={{
						pages: pagesState,
						search: searchState,
						genres: genresState,
					}}
				/>
			</Div>
			<Saved />
			<Footer items={items} />
		</>
	);
}
