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
	return (
		<div className="menu">
			<h2>Our Menu</h2>
			<ul className="pizzas">
				{pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
			</ul>
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
			{isOpen && (
				<div className="order">
					<p>We're open until {closeHour}:00, Come visit us or oder online.</p>
					<button className="btn">Order</button>
				</div>
			)}
		</footer>
	);
}

function Pizza(props) {
	console.log(props);
	return (
		<li className="pizza">
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
			<div>
				<h3>{props.pizzaObj.name}</h3>
				<p>{props.pizzaObj.ingredients}</p>
				<span>{props.pizzaObj.price}</span>
			</div>
		</li>
	);
}

export default App;
