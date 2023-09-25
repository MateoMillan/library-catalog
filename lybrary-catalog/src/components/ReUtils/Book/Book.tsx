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

export default function Book({ book }: LibraryItem) {
	return (
		<>
			<div className="book">
				<img
					src={book.cover}
					alt={`book-library-${book.title}-${book.author}-${book.genre}`}
					className="book-image"
					draggable="false"
				/>
				<h3 className="book-tite">{book.title}</h3>
				<h4 className="book-pages">{book.pages}</h4>
			</div>
		</>
	);
}
