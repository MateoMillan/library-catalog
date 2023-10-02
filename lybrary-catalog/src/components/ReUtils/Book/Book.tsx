import "./Book.css";

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
				<div className="material-div"></div>
				<img
					src={book.cover}
					alt={`book-library-${book.title}-${book.author}-${book.genre}`}
					className="book-image"
					draggable="false"
				/>
				<div className="book-info">
					<h3 className="book-title">{book.title}</h3>
					<h4 className="book-pages">{book.pages}</h4>
				</div>
			</div>
		</>
	);
}
