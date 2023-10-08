import { useActive } from "../../Hooks/UseActive";
import { IoBookmarkOutline } from "react-icons/io5";
import CatalogContainer from "../ReUtils/CatalogContainer/CatalogContainer";
import "./Saved.css";
import { useSelector } from "react-redux";

export default function Saved() {
	const { active, handleToggle } = useActive();
	let savedBooks = useSelector(
		(state: any) => state.savedBooks.value
	)

	return (
		<div className={`saved-container ${active && "active"}`}>
			<div className="saved-catalog-section">
				<CatalogContainer books={savedBooks} />
			</div>
			<button className="saved-toggle" onClick={handleToggle}>
				<IoBookmarkOutline />
			</button>
		</div>
	);
}
