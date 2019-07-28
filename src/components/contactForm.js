import React from 'react';
//import Image from '../components/image';
import '../css/form.css';
import '../css/buttons.css';

const ContactForm = () => (
    <>
        <div className="form__instructions"></div>
        <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="form"
        >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="form__fields">
                <div className="form__field form__field--half">
                    <label className="form__field-label" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form__field-input"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="form__field form__field--half">
                    <label className="form__field-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form__field-input"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="form__field form__field--full">
                    <label className="form__field-label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="form__field form__field-textarea"
                        name="message"
                        id="message"
                        rows="6"
                    />
                </div>
                <div className="form__field">
                    <button
                        type="submit"
                        className="button-link button-link--large"
                    >
                        <span className="button-link__label button-link__label--large">
                            Submit
                        </span>
                    </button>
                </div>
            </div>
        </form>
    </>
);

export default ContactForm;
