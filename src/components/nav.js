import { Link } from 'gatsby';
import React from 'react';
import '../css/nav.css';

const Nav = () => (
    <nav className="nav">
        <Link className="nav__link" to="/">
            Home
        </Link>
        <Link className="nav__link" to="/about">
            About
        </Link>
        <Link className="nav__link" to="blog">
            Blog
        </Link>
        <Link className="nav__link" to="recipes">
            Recipes
        </Link>
        <Link className="nav__link" to="/contact">
            Contact
        </Link>
    </nav>
);

export default Nav;
