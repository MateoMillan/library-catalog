import Div from "./components/ReUtils/Div/Div.tsx";
import TitleContainer from "./components/TitleContainer/TitleContainer.tsx";
import library from "./data/books.json";
import CatalogContainer from "./components/ReUtils/CatalogContainer/CatalogContainer.tsx";
import Saved from "./components/Saved/Saved.tsx";
import Footer from "./components/Footer/Footer.tsx";
import items from "./data/footer-items.json";
import FilterContainer from "./components/ReUtils/FilterContainer/FilterContainer.tsx";


export default function App() {
	return (
		<>
			<Div className="title-section">
				<TitleContainer />
			</Div>
			<Div className="catalog-section">
				<FilterContainer books={library}/>
				<CatalogContainer
					books={library}
					filters={{
						pages: [0, 1500],
						search: "",
						genres: "All",
					}}
				/>
			</Div>
			<Saved />
			<Footer items={items} />
		</>
	);
}
