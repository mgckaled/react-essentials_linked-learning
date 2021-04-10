import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Fragment
function AppTwo() {
  return <h1>This is the second App</h1>
}

// Destructuring lists
const [x1, x2, x3] = ["y1", "y2", "y3"]
console.log(x1, x2, x3);


ReactDOM.render(
	<React.StrictMode>
		<React.Fragment>
      
			<App authorized={true} />
			<AppTwo />
		</React.Fragment>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
