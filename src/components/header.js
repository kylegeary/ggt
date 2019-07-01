import { Link } from 'gatsby';
import React from 'react';
import '../css/header.css';

const Header = () => (
    <header class="header">
        <h1 className="header__title">
            <Link className="header__title-link" to="/">
                Guy & Gal Travel
            </Link>
        </h1>
    </header>
);

export default Header;
