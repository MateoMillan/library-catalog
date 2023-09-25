import { IoMailOutline, IoCallOutline } from "react-icons/io5";

interface Items {
	items: {
		icon: string;
		text: string[];
	}[];
}

export default function Footer({ items }: Items) {
	console.log(items);
	return (
		<>
			<footer className="footer">
				{items.map((item, index: number) => {
					let IconoComponente: string | null;
					switch (item.icon) {
						case "IoMailOutline":
							IconoComponente = IoMailOutline;
							break;
						case "IoCallOutline":
							IconoComponente = IoCallOutline;
							break;
						default:
							IconoComponente = null;
					}
					return (
						<div key={index} className="item-container">
							<h4>{item.text[0]}</h4>
							<a className="footer-item" href={item.text[2]}>
								{item.text[1]}
							</a>
							{IconoComponente && <IconoComponente />}
						</div>
					);
				})}
			</footer>
		</>
	);
}
