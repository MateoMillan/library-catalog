import { useActive } from "../../Hooks/UseActive";
import { IoBookmarkOutline } from "react-icons/io5";

export default function Saved() {
	const { handleToggle } = useActive();

	return (
		<div className="saved-container">
			<button className="saved-toggle" onClick={handleToggle}><IoBookmarkOutline /></button>
		</div>
	);
}
