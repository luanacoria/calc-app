import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

const App = () => {
	const [stack, setStack] = useState("");

	const items = words(stack, /[^-^+^*^/]+/g)
	const value = items.length > 0 ? items[items.length - 1] : "0"

	return (
		<main className="react-calculator">
			<Result value={value} />
			<Numbers onClickNumber={number => setStack(`${stack}${number}`)}
			/>
			<Functions
				onDelete={() => {
					if (stack.length > 0) {
						const newStack = stack.substring(0, stack.length - 1);
						setStack(newStack);
					}
				}}
				onContentClear={() => setStack("")}
			/>
			<MathOperations
				onClickOperation={ operation => setStack(`${stack}${operation}`)}
				onClickEqual={() => setStack(eval(stack).toString()) }
			/>
		</main>
	);
};

export default App;
