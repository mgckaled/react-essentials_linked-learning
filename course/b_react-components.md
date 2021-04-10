# React Components

## Creating a React Component

- We create a component by creating a function
- And the function returns JSX, Javascript XML.
- **Remember**: a component is a function that returs a little bit of UI.

## Adding components properties

- Every react component has acess to am object called `props`
- This object holds all of the different properties for our compenent
- You will be able to use all the properties you want
- Pass the props as a function argument
- With this, you can place information in for every single component

## Working with lists

```js
const dishes = [
	"Macaroni and Chesse",
	"Salmon",
	"Tofu with Vegetables",
	"Minestrone",
	"Ice Cream",
	"Cake",
];
```

## Adding keys to list itens

```js
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
```

## Displaying images with React

```js
<img
	src="https://github.com/mgckaled.png"
	height={100}
	alt="my github perfil's"
></img>
```

```js
import restaurant from "./restaurant.jpg";

<img src={restaurant} height={200} alt="rest_img"></img>
```

## Using fragments

- They must be wrapped in a especific tag - `<React.Fragment>` or `< />`:
- Ex:

```js
ReactDOM.render(
	<React.StrictMode>
		<React.Fragment>
			<App />
			<AppTwo />
		</React.Fragment>
	</React.StrictMode>,
	document.getElementById("root")
);
```
