import "./Div.css"

interface PropTypes {
	children?: any,
	className?: string
}

export default function Div({ children, className }: PropTypes) {
	return (
		<div className={className}>
			{children}
		</div>
	)
}