import React, { useState, useReducer } from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function SecretComponent() {
	return <h1>Super secret information for authorized users only</h1>;
}

function Header(props) {
	return (
		<header>
			<h1>{props.name}'s Kitchen</h1>
			{/* <img
				src="https://github.com/mgckaled.png"
				height={50}
				alt="my github perfil's"
			></img> */}
		</header>
	);
}

function Main(props) {
	return (
		<section>
			<p>We serve the most {props.adjective} food arround</p>
			<img src={restaurant} height={200} alt="rest_img"></img>
			<ul style={{ textAlign: "left" }}>
				{props.dishes.map((dish) => (
					<li key={dish.id}>{dish.title}</li>
				))}
			</ul>
		</section>
	);
}

// destructuring object (props)
function Footer({ year }) {
	return (
		<footer>
			<p>Copyright {year}</p>
		</footer>
	);
}

const dishes = [
	"Macaroni and Chesse",
	"Salmon",
	"Tofu with Vegetables",
	"Minestrone",
	"Ice Cream",
	"Cake",
];

// Creating a key for each list element
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function CheckBox() {
	const [checked, toggle] = useReducer((checked) => !checked, false);

	return (
		<>
			<input type="checkbox" value={checked} onChange={toggle} />
			<p>{checked ? "checked" : "not checked"}</p>
		</>
	);
}

// Use setState function to configure an action (onClick button)
function App(props) {
	const [timeOrder, makeOrder] = useState("");
	console.log(timeOrder);

	if (props.authorized) {
		return (
			<div className="App">
				<Header name="Horacio" />
				<Main adjective="amazing" dishes={dishObjects} />

				<p>Make your order {timeOrder}</p>
				<button onClick={() => makeOrder("Now!")}>Now</button>
				<button onClick={() => makeOrder("at your time!")}>at any time</button>

				<Footer year={new Date().getFullYear()} />
				<CheckBox />
			</div>
		);
	} else {
		return <SecretComponent />;
	}
}

export default App;
