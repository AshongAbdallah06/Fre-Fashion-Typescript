import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const useContextProvider = () => {
	const context = useContext(Context);

	if (!context) {
		throw Error("useContext must be used inside a ContextProvider");
	}

	return context;
};

export default useContextProvider;
