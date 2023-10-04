import "./TitleContainer.css";

export default function TitleContainer() {
	const titleContainer = document.getElementById("title-container");
	window.addEventListener("scroll", () => {
		if (titleContainer && window.scrollY >= 400) {
			titleContainer.classList.add("title-container-scrolled");
		} else if (titleContainer) {
			titleContainer.classList.remove("title-container-scrolled");
		}
		if (titleContainer && window.scrollY >= 840) {
			titleContainer.classList.add("title-container-scrolled-840");
		} else if (titleContainer) {
			titleContainer.classList.remove("title-container-scrolled-840");
		}
	});

	return (
		<div className="title-container" id="title-container">
			<h1 className="name">My Library</h1>
			<h2 className="slogan">Slogan slogan slogan</h2>
		</div>
	);
}
