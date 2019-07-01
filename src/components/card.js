import React from 'react';
import '../css/card.css';

const Card = () => (
    <div className="card-wrapper">
        <div className="card">
            <div className="card__media"></div>
            <span className="card-content__category">Recipe</span>
            <div className="card__content">
                <h2 className="card-content__heading">Heading</h2>
                <p className="card-content__body">
                    This is a media card. You can use this section to describe
                    the content.
                </p>
            </div>
            <div className="card__cta">
                <button className="card-cta__button" tabindex="0" type="button">
                    <span className="card-cta__button--label">Read &rarr;</span>
                </button>
            </div>
        </div>
    </div>
);
export default Card;
