import React from "react";
import Button from "./components/Button"
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"
import "./App.css"


const App = () => {

	const clickHandlerFuntion = text => {
		console.log(text)
	}

	console.log('Renderización de la App');
	return (
		<main className="react-calculator">
			<Result />
			<div className="numbers">
				<Button text={"1"} clickHandler={clickHandlerFuntion}/>
				<Button text={"2"} clickHandler={clickHandlerFuntion}/>
				<Button text={"3"} clickHandler={clickHandlerFuntion}/>
				<Button text={"4"} clickHandler={clickHandlerFuntion}/>
				<Button text={"5"} clickHandler={clickHandlerFuntion}/>
				<Button text={"6"} clickHandler={clickHandlerFuntion}/>
				<Button text={"7"} clickHandler={clickHandlerFuntion}/>
				<Button text={"8"} clickHandler={clickHandlerFuntion}/>
				<Button text={"9"} clickHandler={clickHandlerFuntion}/>
				<Button text={"0"} clickHandler={clickHandlerFuntion}/>
			</div>
			<div className="functions">
				<button>clear </button>
				<button>r</button>
			</div>
			<MathOperations onClickOperation={operation => console.log(operation) } onClickEqual={equal => console.log(equal)}/>
		</main>
	);
};

export default App;
