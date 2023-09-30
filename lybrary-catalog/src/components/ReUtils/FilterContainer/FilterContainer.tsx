import Select from "../Select/Select";
import { useState, useEffect } from "react";

type Genre = "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror" | "All";

interface Author {
	name: string;
	otherBooks: string[];
}

interface Book {
	title: string;
	pages: number;
	genre: Genre;
	cover: string;
	synopsis: string;
	year: number;
	ISBN: string;
	author: Author;
}

interface LibraryItem {
	book: Book;
}

interface Library {
	library: LibraryItem[];
}

interface PropTypes {
	books: Library;
	onSendData: (search: string, genre: Genre, pages: number) => void;
}

export default function FilterContainer({ books, onSendData }: PropTypes) {
	const [searchState, setSearchState] = useState("");
	const [pagesState, setPagesState] = useState(1500);
	const [genresState, setGenresState] = useState<Genre>("All");

	// eslint-disable-next-line prefer-const
	let genres: string[] = [];
	genres.push("All");
	books.library.forEach((book) => {
		if (!genres.includes(book.book.genre)) {
			genres.push(book.book.genre);
		}
	});

	useEffect(() => {
		// Esta función se ejecutará cada vez que datoLocal cambie
		onSendData(searchState, genresState, pagesState);
	}, [searchState, genresState, pagesState]); // Asegúrate de incluir datoLocal como dependencia para que useEffect se ejecute cuando cambie

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchState(e.target.value);
	};

	const handleGenresChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (
			e.target.value === "All" ||
			e.target.value === "Fantasía" ||
			e.target.value === "Ciencia ficción" ||
			e.target.value === "Terror" ||
			e.target.value === "Zombies"
		) {
			setGenresState(e.target.value);
		}
	};

	const handlePagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPagesState(parseInt(e.target.value));
	};

	return (
		<div className="filter-container">
			<div className="top">
				<input
					type="text"
					name="search"
					id="input-search"
					value={searchState}
					onChange={handleSearchChange}
				/>
			</div>
			<div className="bottom">
				<label htmlFor="max-pages-label" id="max-pages-label">
					<input
						type="range"
						name="max-pages-input"
						id="max-pages-input"
						onChange={handlePagesChange}
					/>
				</label>
				<Select
					name="genres"
					id="genres-select"
					options={genres}
					onChange={handleGenresChange}
				/>
			</div>
		</div>
	);
}
