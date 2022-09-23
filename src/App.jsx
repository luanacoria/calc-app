import React from "react";
import Functions from './components/Functions'
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"
import "./App.css"


const App = () => {
	console.log('Renderización de la App');
	return (
		<main className="react-calculator">
			<Result value={ undefined }/>
			<Numbers onClickNumber={text => console.log(text)}/>
			<Functions onDelete={erase => console.log(erase)} onContentClear={ clear => console.log(clear) }/>
			<MathOperations onClickOperation={operation => console.log(operation) } onClickEqual={equal => console.log(equal)}/>
		</main>
	);
};

export default App;
