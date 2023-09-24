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
	filters: {
		search: string;
		pages: number[];
		genres: "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror";
	};
}

export default function CatalogContainer({ books, filters }: PropTypes) {
	const bookLibrary = books.library || [];

	const filteredBooks = bookLibrary.filter((element: LibraryItem) => {
		if (filters.search === "") {
			return true;
		} else {
			return filters.search === element.book.title;
		}
	});

	return (
		<div>
			{filteredBooks.map((libraryItem: LibraryItem, index: number) => (
				<p key={index}>{libraryItem.book.title}</p>
			))}
		</div>
	);
}
