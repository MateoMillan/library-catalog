import { createContext, useState } from "react";

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

const MyContext = createContext<{
	data: LibraryItem[];
	onUpdate: (newData: any) => void;
}>({
	data: [],
	onUpdate: (newData) => {
		newData;
	},
});

const ContextProvider = ({ children }: { children: any }) => {
	const [dataState, setData] = useState<LibraryItem[]>([]);

	const handleUpdate = (newData: LibraryItem[]) => {
		setData(() => [...newData]);
	};
	
	return (
		<MyContext.Provider value={{ data: dataState, onUpdate: handleUpdate }}>
			{children}
		</MyContext.Provider>
	);
};

export { MyContext, ContextProvider };
