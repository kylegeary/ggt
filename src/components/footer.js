import React from 'react';
import '../css/footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer__content">
            <p className="footer__content-text">
                Built as a 🎁 for Chris &amp; Paige
            </p>
            <p className="footer__content-text">
                &copy; {new Date().getFullYear()}{' '}
                <a
                    className="footer__content-text-link"
                    href="https://kylegeary.com"
                >
                    Kyle Geary
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;
