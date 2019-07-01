import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <h1>Contact us</h1>
        <p>Lorem Ipsum</p>
        <p>dolor sit amet.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </Layout>
);

export default ContactPage;
