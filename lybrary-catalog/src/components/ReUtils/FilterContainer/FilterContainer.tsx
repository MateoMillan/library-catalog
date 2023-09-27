import Select from "../Select/Select";
import { useState, useContext } from "react";
import { SearchContext } from "../../../context/search";

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
}

export default function FilterContainer({ books }: PropTypes) {
	const [searchState, setSearchState] = useState("");
	const searchContext = useContext(SearchContext);

	// eslint-disable-next-line prefer-const
	let genres: string[] = [];
	genres.push("All");
	books.library.forEach((book) => {
		if (!genres.includes(book.book.genre)) {
			genres.push(book.book.genre);
		}
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchState(e.target.value);
		console.log(`state: ${searchState}, context: ${searchContext}`);
	};

	return (
		<div className="filter-container">
			<div className="top">
				<SearchContext.Provider value={searchState}>
					<input
						type="text"
						name="search"
						id="input-search"
						value={searchState}
						onChange={handleChange}
					/>
				</SearchContext.Provider>
			</div>
			<div className="bottom">
				<Select name="genres" id="genres-select" options={genres} />
			</div>
		</div>
	);
}
