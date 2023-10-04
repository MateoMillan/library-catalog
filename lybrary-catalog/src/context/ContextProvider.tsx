import { createContext, useState } from "react";

const MyContext = createContext<{
	data: string;
	onUpdate: (nuevoDato: any) => void;
}>({
	data: "",
	onUpdate: (dato) => {
		dato;
	},
});

const ProveedorContexto = ({ children }: { children: any }) => {
	const [data, setData] = useState("");

	const manejarActualizacion = (nuevoDato: any) => {
		setData(nuevoDato);
	};

	return (
		<MyContext.Provider value={{ data: data, onUpdate: manejarActualizacion }}>
			{children}
		</MyContext.Provider>
	);
};

export { MyContext, ProveedorContexto };
