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
			library: [],
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
