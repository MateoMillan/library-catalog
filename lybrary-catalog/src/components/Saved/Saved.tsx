import { useActive } from "../../Hooks/UseActive";
import { IoBookmarkOutline } from "react-icons/io5";
import CatalogContainer from "../ReUtils/CatalogContainer/CatalogContainer";
import { MyContext } from "../../context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import "./Saved.css";

export default function Saved() {
	const { active, handleToggle } = useActive();
	const { data } = useContext(MyContext);
	const [dataState, setDataState] = useState({
		library: data,
	});

	useEffect(() => {
		setDataState({
			library: data,
		});
	}, [data]);

	function handleClick() {
		handleToggle();
		console.log(dataState);
	}

	return (
		<div className={`saved-container ${active && "active"}`}>
			<div className="saved-catalog-section">
				{/* <FilterContainer /> */}
				<CatalogContainer
					books={dataState}
					className="saved-catalog"
				/>
			</div>
			<button className="saved-toggle" onClick={handleClick}>
				<IoBookmarkOutline />
			</button>
		</div>
	);
}
