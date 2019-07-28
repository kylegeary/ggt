import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/contactForm';
//import Image from '../components/image';
import SEO from '../components/seo';
import '../css/contact.css';
import '../css/form.css';

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <h1 className="contact-title">Contact Us</h1>
        <ContactForm />
    </Layout>
);

export default ContactPage;
