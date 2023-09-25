import Select from "../Select/Select";

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
	// eslint-disable-next-line prefer-const
	let genres: string[] = [];
	genres.push("All");
	books.library.forEach((book) => {
		if (!genres.includes(book.book.genre)) {
			genres.push(book.book.genre);
		}
	});
	return (
		<div className="filter-container">
			<div className="top">
				<input type="text" name="search" id="input-search" />
			</div>
			<div className="bottom">
				<Select name="genres" id="genres-select" options={genres} />
			</div>
		</div>
	);
}
