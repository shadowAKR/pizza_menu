import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./index.css";
// import pizzaData from "./data.js";
import axios from 'axios';

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
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/pizza-menu/pizza-list/');
                setPizzas(response.data); // Assuming the data is an array of pizzas
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData(); // Call the fetchData function to fetch data when the component mounts
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div className="menu">
            <h2>Our Menu</h2>
            {pizzas.length > 0 ?
                (
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.id} />))}
                    </ul>
                )
                : <p>No pizzas available</p>
            }
        </div>
    );
}

function Pizza({pizzaObj}) {
    if(pizzaObj.sold_out) return null;
    return (
        <li className="pizza">
            <img src={pizzaObj.image} alt={pizzaObj.name}></img>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	return (
		<footer className="footer">
			{isOpen ? <Order closeHour={closeHour} openHour={openHour} /> :
				<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 !</p>
		}
		</footer>
	);
}

function Order({openHour, closeHour}) {
	return (
		<div className="order">
			<p>We're open from {openHour}:00 to {closeHour}:00, Come visit us or oder online.</p>
			<button className="btn">Order</button>
		</div>
	);
}


export default App;
