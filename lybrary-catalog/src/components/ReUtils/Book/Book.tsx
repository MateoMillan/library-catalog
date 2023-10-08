import { useState } from "react";
import "./Book.css";
import { IoBookmarkOutline } from "react-icons/io5";
import { addBook, removeBook } from "../../../redux/slices/savedBooks";
import { useDispatch } from "react-redux";

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
	isSaved: boolean;
}

export default function Book({ book, isSaved }: LibraryItem) {
	const [isSavedState, setIsSaved] = useState<boolean>(isSaved);
	const dispatch = useDispatch();

	function handleSave() {
		if (isSavedState) {
			dispatch(removeBook({ book: book }));
		} else {
			dispatch(addBook({ book: book }));
		}
		setIsSaved((isSavedState) => !isSavedState);
	}

	return (
		<>
			<div className="book">
				{!isSaved && (
					<div
						className={
							isSavedState ? "save-button saved" : "save-button"
						}
						onClick={handleSave}
					>
						<IoBookmarkOutline />
					</div>
				)}
				<div className="material-div"></div>
				<img
					src={book.cover}
					alt={`book-library-${book.title}-${book.author}-${book.genre}`}
					className="book-image"
					draggable="false"
				/>
				<div className="book-info">
					<h3 className="book-title">{book.title}</h3>
					<h4 className="book-pages">{book.pages} pages</h4>
				</div>
			</div>
		</>
	);
}
