import React, { useState, useEffect } from "react";
import "./App.css";

function AppThree() {
	const [emotion, setEmotion] = useState("happy");
	const [secondary, setSecondary] = useState("tired");

	//UseEffect -> manage side effects releted to the component render
	// - callback function (function inside another)
	// - second argument -> dependency array
	useEffect(() => {
		console.log(`It's ${emotion} around here!`);
	}, [emotion]);

	useEffect(() => {
		console.log(`It's ${secondary} around here!`);
	}, [secondary]);

	return (
		<div className="App">
			<h2>
				Current emotion is {emotion} and {secondary}.
			</h2>
			<button onClick={() => setEmotion("happy")}>Happy</button>
			<button onClick={() => setSecondary("crabby")}>Make Crabby</button>
			<button onClick={() => setEmotion("frustaded")}>Frustrate</button>
			<button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
		</div>
	);
}

export default AppThree;
