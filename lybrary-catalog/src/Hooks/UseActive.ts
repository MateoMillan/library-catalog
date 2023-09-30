import { useState } from "react";

export const useActive = (initialState = false) => {
	const [active, setActive] = useState(initialState);

	const handleToggle = () => {
		setActive(!active);
	};

	return {
		active,
		handleToggle,
	};
};
