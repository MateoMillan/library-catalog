import { useActive } from "../../Hooks/UseActive";
import { IoBookmarkOutline } from "react-icons/io5";
import CatalogContainer from "../ReUtils/CatalogContainer/CatalogContainer";
import FilterContainer from "../ReUtils/FilterContainer/FilterContainer";
import "./Saved.css"

export default function Saved() {
	const { active, handleToggle } = useActive();

	return (
		<div className={`saved-container ${active && "active"}`}>
			<div className="saved-catalog-section">
				{/* <FilterContainer />
				<CatalogContainer /> */}
			</div>
			<button className="saved-toggle" onClick={handleToggle}><IoBookmarkOutline /></button>
		</div>
	);
}
