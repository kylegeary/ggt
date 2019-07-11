import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import '../css/header.css';

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );
    return (
        <header className="header">
            <style>
                @import
                url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Roboto|Josefin+Sans|open+sans&display=swap');
            </style>
            <h1 className="header__title">
                <Link className="header__title-link" to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
        </header>
    );
};

export default Header;
