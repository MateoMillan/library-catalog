import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

interface SavedBooksState {
	value: Library;
}

export const savedBooks = createSlice({
	name: "savedBooks",
	initialState: {
		value: {
			library: [
				{
					book: {
						title: "El Señor de los Anillos",
						pages: 1200,
						genre: "Fantasía",
						cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
						synopsis:
							"Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
						year: 1954,
						ISBN: "978-0618640157",
						author: {
							name: "J.R.R. Tolkien",
							otherBooks: ["El Hobbit", "El Silmarillion"],
						},
					},
				},
			],
		},
	} as SavedBooksState,
	reducers: {
		addBook: (state: SavedBooksState, action: PayloadAction<any>) => {
			state.value.library = [...state.value.library, action.payload];
		},
		removeBook: (state: SavedBooksState, action: PayloadAction<any>) => {
			state.value.library.splice(
				state.value.library.indexOf(action.payload),
				1
			);
		},
	},
});

export const { addBook, removeBook } = savedBooks.actions;

export default savedBooks.reducer;
