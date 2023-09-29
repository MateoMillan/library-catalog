import Select from "../Select/Select";
import { useState, useEffect } from "react";

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

interface PropTypes {
	books: Library;
	onEnviarDatos: (dato: Filter) => void;
}

export default function FilterContainer({ books, onEnviarDatos }: PropTypes) {
	const [searchState, setSearchState] = useState("");
	const [maxPages, setMaxPages] = useState(0);
	const [pagesState, setPagesState] = useState<[number, number]>([0, 0]);
	const [genresState, setGenresState] = useState<
		| "All"
		| "Fantasía"
		| "Ciencia ficción"
		| "Zombies"
		| "Terror"
		| string
		| undefined
	>("All");

	const maxPagesFromBooks = Math.max(
		...books.library.map((book) => book.book.pages)
	);
	setMaxPages(maxPagesFromBooks);

	// eslint-disable-next-line prefer-const
	let genres: string[] = [];
	genres.push("All");
	books.library.forEach((book) => {
		if (!genres.includes(book.book.genre)) {
			genres.push(book.book.genre);
		}
	});

	setPagesState(() => [0, maxPages]);

	const handleInputSearchChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchState(() => e.target.value);
	};

	const handleInputPagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPagesState(() => [0, parseInt(e.target.value)]);
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setGenresState(() => e.target.value);
	};

	useEffect(() => {
		console.log("Inside useEffect");
		onEnviarDatos({
			search: searchState,
			pages: pagesState,
			genres: genresState,
		});
	}, [onEnviarDatos, searchState, pagesState, genresState]);

	return (
		<div className="filter-container">
			<div className="top">
				<input
					type="text"
					name="search"
					id="input-search"
					value={searchState}
					onChange={handleInputSearchChange}
				/>
			</div>
			<div className="bottom">
				<input
					type="range"
					name="pages"
					id="pages-input"
					min={0}
					max={maxPages}
					onChange={handleInputPagesChange}
				/>
				<Select
					name="genres"
					id="genres-select"
					options={genres}
					onChange={handleSelectChange}
				/>
			</div>
		</div>
	);
}
