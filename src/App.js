import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function SecretComponent() {
	return <h1>Super secret information for authorized users only</h1>;
}

function RegularComponent() {
	return (
		<h3>
			<i>Everyone can see this component</i>
		</h3>
	);
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

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function App(props) {
	if (props.authorized) {
		return (
			<div className="App">
				<RegularComponent />
				<Header name="Horacio" />
				<Main adjective="amazing" dishes={dishObjects} />
				<Footer year={new Date().getFullYear()} />
			</div>
		);
	} else {
		return <SecretComponent />;
	}
}

export default App;
