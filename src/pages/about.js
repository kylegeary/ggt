import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import '../css/about.css';
import '../css/featured-image.css';
import '../css/post.css';

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className="post">
            <section className="post__info">
                <h1 className="post__info-title about__title">Meet Guy And Gal</h1>
            </section>
            <main className="post__body">
                <img
                    className="post__body-featured-image"
                    src="https://ucarecdn.com/09ef781b-7e85-4992-86dd-af31297139dd/guygal.jpg"
                    alt="Chris and Paige"
                />
                <div className="post__body-content">
                    <p>
                        Hey there! We’re Chris and Paige Fellows, newlyweds
                        embarking on the ultimate around-the-world adventure:
                        365 days, 6 continents, 2 backpacks and countless
                        memories to be made. Follow us as we say goodbye to our
                        9-5 jobs and hello to living life to the fullest, one
                        day and destination at a time.
                    </p>
                    <h3>Who’s that guy?</h3>
                    <p>
                        It’s Chris! Traveling has been a passion of mine since
                        backpacking with my dad and grandpa in fifth grade.
                        Since then, I’ve had the opportunity to immerse myself
                        in many different cultures, while stretching myself
                        beyond my comfort zone. All of this and more had made me
                        who I am today – a history teacher, lifelong learner,
                        and adventure seeker.
                    </p>
                    <h3>Who's that gal?</h3>
                    <p>
                        It’s Paige! I’m 27 years old and realizing one of my
                        oldest and dearest dreams – traveling the world.
                        Seriously, someone pinch me! Travel has always brought
                        an unexplainable peace and perspective to my life that
                        few things do, and I can’t wait to dedicate a full year
                        to what I love with my favorite guy. Bring on the world!
                    </p>
                </div>
            </main>
            <div className="post__cta">
                <Link to="/" className="post__cta-link">
                    &larr; back
                </Link>
            </div>
        </div>
    </Layout>
);

export default AboutPage;
