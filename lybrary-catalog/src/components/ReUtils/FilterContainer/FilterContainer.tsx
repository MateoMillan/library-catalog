import Select from "../Select/Select";
import { useState, useEffect } from "react";
import "./FilterContainer.css"

type Genre = "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror" | "All";

interface Author {
	name: string;
	otherBooks: string[];
}

interface Book {
	title: string;
	pages: number;
	genre: string;
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
	const maxPages = Math.max(...books.library.map((book) => book.book.pages))
	const [searchState, setSearchState] = useState("");
	const [pagesState, setPagesState] = useState(maxPages);
	const [genresState, setGenresState] = useState<Genre>("All");
	const [maxPagesState, setMaxPages] = useState<number>();

	useEffect(() => {
		setMaxPages(maxPages);
	}, []);

	// eslint-disable-next-line prefer-const
	let genres: string[] = [];
	genres.push("All");
	books.library.forEach((book) => {
		if (!genres.includes(book.book.genre)) {
			genres.push(book.book.genre);
		}
	});

	useEffect(() => {
		onSendData(searchState, genresState, pagesState);
	}, [searchState, genresState, pagesState]);

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
					autoComplete="off"
					type="text"
					name="search"
					placeholder="Search a book..."
					id="input-search"
					className="input-search"
					value={searchState}
					onChange={handleSearchChange}
				/>
			</div>
			<div className="bottom">
				<label className="max-pages-label">
					<input
						type="range"
						name="max-pages-input"
						id="max-pages-input"
						className="max-pages-input bottom-filters"
						value={pagesState}
						max={maxPagesState}
						onChange={handlePagesChange}
					/>
					Max pages: <b>{pagesState}</b>
				</label>
				<Select
					name="genres"
					id="genres-select"
					className="genres-select bottom-filters"
					options={genres}
					onChange={handleGenresChange}
				/>
			</div>
		</div>
	);
}
