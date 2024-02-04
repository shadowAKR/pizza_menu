import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import pizzaData from "./data.js";

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Company</h1>
		</header>
	);
}

function Menu() {
	console.log(pizzaData);
	return (
		<div className="menu">
			<h2>Our Menu</h2>
			<div className="pizzas">
				{pizzaData.map((pizza, index) => (
					<Pizza
						key={index}
						name={pizza.name}
						ingredients={pizza.ingredients}
						photoName={pizza.photoName}
						price={pizza.price}
					/>
				))}
			</div>
		</div>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);
	return (
		<footer className="footer">
			{new Date().toLocaleTimeString()}, We are currently open
		</footer>
	);
}

function Pizza(props) {
	console.log(props);
	return (
		<div className="pizza">
			<img src={props.photoName} alt={props.name}></img>
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.price}</span>
			</div>
		</div>
	);
}

export default App;
