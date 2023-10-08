import { useActive } from "../../Hooks/UseActive";
import { IoBookmarkOutline, IoCloseOutline } from "react-icons/io5";
import CatalogContainer from "../ReUtils/CatalogContainer/CatalogContainer";
import "./Saved.css";
import { useSelector } from "react-redux";

export default function Saved() {
	const { active, handleToggle } = useActive();
	let savedBooks = useSelector((state: any) => state.savedBooks.value);

	return (
		<>
			<div className={`saved-container ${active && "active"}`}></div>
			<div
				className={`saved-catalog-section ${
					active && "active-section"
				}`}
			>
				<h2>Saved books</h2>
				<CatalogContainer
					books={savedBooks}
					className="saved-catalog"
					isSavingCatalog
				/>
			</div>
			<div className={`saved-container`}>
				<button className="saved-toggle" onClick={handleToggle}>
					{active ? <IoCloseOutline /> : <IoBookmarkOutline />}
				</button>
			</div>
		</>
	);
}
