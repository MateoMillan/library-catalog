import "./Book.css";
import { MyContext } from "../../../context/ContextProvider";
import { useContext, useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";

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
	const { data, onUpdate } = useContext(MyContext);
	const [isSaved, setIsSaved] = useState(false);

	function onSave(newData: LibraryItem) {
		if (!isSaved) {
			onUpdate([newData, ...data]);
			setIsSaved(!isSaved);
		} else {
			onUpdate(
				data.filter((value) => {
					return value.book.ISBN !== newData.book.ISBN;
				})
			);
			setIsSaved(!isSaved);
			
		}
		
	}

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
				<button
					className={isSaved ? "save saved" : "save"}
					onClick={() => {
						onSave({ book });
					}}
				>
					<IoBookmarkOutline />
				</button>
				<div className="book-info">
					<h3 className="book-title">{book.title}</h3>
					<h4 className="book-pages">{book.pages} pages</h4>
				</div>
			</div>
		</>
	);
}
