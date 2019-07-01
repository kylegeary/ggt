import React from 'react';
import '../css/card.css';

const Card = () => (
    <div class="card-wrapper">
        <div class="card">
            <div class="card__media"></div>
            <span class="card-content__category">Recipe</span>
            <div class="card__content">
                <h2 class="card-content__heading">Heading</h2>
                <p class="card-content__body">
                    This is a media card. You can use this section to describe
                    the content.
                </p>
            </div>
            <div class="card__cta">
                <button class="card-cta__button" tabindex="0" type="button">
                    <span class="card-cta__button--label">Read &rarr;</span>
                </button>
            </div>
        </div>
    </div>
);
export default Card;
