import { configureStore } from "@reduxjs/toolkit";
import savedBooks from "./slices/savedBooks";

export default configureStore({
	reducer: {
		savedBooks: savedBooks,
	},
});