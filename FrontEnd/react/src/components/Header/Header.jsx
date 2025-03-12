import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router';
const Header = () => {
    return (
    <header>
		<h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
		<nav>
			<ul>
				<li>projets</li>
				<li>contact</li>
                <NavLink to={"/login"}><li>login</li></NavLink>
				<li><img src="/icons/instagram.png" alt="Instagram"/></li>
			</ul>
		</nav>
	</header>
    );
};

export default Header;