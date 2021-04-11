import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppPages from "./AppPages"
import App from "./App";
import AppThree from "./AppThree";
import GithubAPI from "./gudApi";
import {BrowserRouter as Router} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";

// Fragment
function AppTwo() {
	return (
		<div className="App">
			<h1>This is the second App</h1>
		</div>
	);
}

// Destructuring lists
const [x1, x2, x3] = ["y1", "y2", "y3"];
console.log(x1, x2, x3);

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AppPages />
		</Router>
		<React.Fragment>
			<App authorized={true} />
			<AppTwo />
			<AppThree />
			<GithubAPI login="mgckaled" />
		</React.Fragment>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
