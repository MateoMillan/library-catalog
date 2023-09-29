import Book from "../Book/Book";

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
	filters?: {
		search: string;
		pages: [number, number];
		genres: "All" | "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror" | string | undefined;
	};
}

export default function CatalogContainer({ books, filters }: PropTypes) {
	const bookLibrary = books.library;

	const filteredBooks = bookLibrary.filter((element: LibraryItem) => {
		if (filters) {
			if (filters.genres !== "All") {
				return (
					element.book.title
						.toUpperCase()
						.includes(filters.search.toUpperCase()) &&
					element.book.genre === filters.genres &&
					element.book.pages >= filters.pages[0] &&
					element.book.pages <= filters.pages[1]
				);
			} else {
				return (
					element.book.title
						.toUpperCase()
						.includes(filters.search.toUpperCase()) &&
					element.book.pages >= filters.pages[0] &&
					element.book.pages <= filters.pages[1]
				);
			}
		} else {
			return true;
		}
	});

	return (
		<div className="book-container">
			{filteredBooks.map((libraryItem: LibraryItem, index: number) => (
				<Book key={index} book={libraryItem.book} />
			))}
		</div>
	);
}
