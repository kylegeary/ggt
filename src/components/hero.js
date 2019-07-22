import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../css/hero.css';

const Hero = () => {
    {
        /*
	    const data = useStaticQuery(graphql`
        query {

        }
	`);
*/
    }

    return (
        <div className="hero">
            <div className="hero__text">
                <h1 className="hero__text-title">
                    Hi, we’re Chris and Paige Fellows.
                </h1>
                <p className="hero__text-body">
                    We're newlyweds embarking on the ultimate around-the-world
                    adventure: 365 days, 6 continents, 2 backpacks and countless
                    memories to be made.
                </p>
            </div>
            <div className="hero__media">
                {
                    // <Img fixed={data.file.childImageSharp.fixed} />
                }
            </div>
        </div>
    );
};

export default Hero;
