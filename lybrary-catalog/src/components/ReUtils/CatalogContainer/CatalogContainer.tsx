import { useState, useEffect } from "react";
import Book from "../Book/Book";
import NoBook from "../NoBooks/NoBook";
import "./CatalogContainer.css";

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
		pages: number;
		genres: "All" | "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror";
	};
	className?: string;
}

export default function CatalogContainer({
	books,
	filters,
	className,
}: PropTypes) {
	const [filteredBooks, setFilteredBooks] = useState<LibraryItem[]>([]);
	const [library] = useState(books.library);

	useEffect(() => {
		if (library && library.length !== 0) {
			const newFilteredBooks = library.filter((element: LibraryItem) => {
				if (filters) {
					if (filters.genres !== "All") {
						return (
							element.book.title
								.toUpperCase()
								.includes(filters.search.toUpperCase()) &&
							element.book.genre === filters.genres &&
							element.book.pages <= filters.pages
						);
					} else {
						return (
							element.book.title
								.toUpperCase()
								.includes(filters.search.toUpperCase()) &&
							element.book.pages <= filters.pages
						);
					}
				} else {
					return true;
				}
			});
			setFilteredBooks(newFilteredBooks);
		}
	}, [books, filters]);

	return (
		<div className={`book-container ${className && className}`}>
			{filteredBooks.length !== 0 ? (
				filteredBooks.map((libraryItem: LibraryItem, index: number) => (
					<Book key={index} book={libraryItem.book} />
				))
			) : (
				<NoBook />
			)}
		</div>
	);
}
