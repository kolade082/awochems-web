import React, { useEffect } from 'react';
import HeroSection from "../components/HeroSection/HeroSection";
import company_image from "../assets/images/company_image.jpg";
import sus from "../assets/images/sus.jpg";
import exec1 from "../assets/images/exec1.png";
import exec2 from "../assets/images/exec2.jpg";
import '../styles/AboutPage.css';
import ExecutiveProfile from "../components/ExecutiveProfile/ExecutiveProfile";
import { Link } from "react-router-dom";

interface Executive {
    name: string;
    position: string;
    imageUrl: string;
    bio: string;
}

const executives: Executive[] = [
    {
        name: "Zaccheaus Oluwadara",
        position: "Chairman/ MD",
        imageUrl: exec1,
        bio: "He has experience in manufacturing process, business analysis and development, procurement process, sales and marketing. Has over 30years of impactful experience in driving business growth and expansion strategies."
    },
    {
        name: "Olukemi Oluwadara",
        position: "Executive Director",
        imageUrl: exec2,
        bio: "Cognate experience in leading procurement processes, manufacturing, managing product development and deployment to meet customer's needs, driving quality assurance and implement cost saving savings strategies. Has over 25 years impactful experience in driving business growth and expansion strategies.passionate about achieving excellent results."
    },
];

const AboutPage: React.FC = () => {
    useEffect(() => {
        // Add observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, { threshold: 0.1 });

        // Observe all elements with fade-in class
        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page-wrapper page-transition">
            <HeroSection backgroundImage={company_image} title="About Us" />
            <div className="about-content-container">
                <section className="about-section fade-in">
                    <h2 className="header-text">Our History</h2>
                    <div className="history-content">
                        <div className="fade-in">
                            <p>Awochem Limited was incorporated in 19 — and has been providing packaging materials to
                                the domestic and industrial sector.
                                The company has seasoned and experienced industrial Chemists and experts who have a deep
                                knowledge of the Nigerian industrial market.
                                The technical knowledge is complimented with a strong management team growing the company to
                                its present enviable state.
                            </p>
                        </div>
                        <div className="fade-in">
                            <p>
                                Awochem Limited is a manufacturer of different sizes of flexible polyethene packaging for
                                domestic and commercial uses.
                                We extrude poly film, imprint it to customer specifications, and convert it into various bag
                                styles and sizes.
                                Our modern machines can also manufacture retail flexible plastic packagings.
                                We have been in the business for over 15 years providing packaging solutions to domestic and
                                industrial sectors.
                                We guarantee our customers the most cost-effective and on-time solutions for their flexible
                                packaging requirements, emphasizing quality.
                                Our innovation and commitment to quality can be found in every aspect of our manufacturing
                                process.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="history-section fade-in">
                    <div className="history-content">
                        <h2 className="header-text">Sustainability</h2>
                        <p>Awochem Limited is committed to sustainability in its business operations. The company policy
                            is hinged on three 'R's: Reduce, Reuse and Recycle.
                            The company recognizes their responsibility towards the environment, its employees and the
                            community in which they operate.</p>
                    </div>
                    <div className="history-image-container fade-in">
                        <img src={sus} alt="Our History" className="history-image" />
                    </div>
                </section>

                <section className="vision-mission-section">
                    <div className="vision fade-in">
                        <h2 className="header-text">Our Vision</h2>
                        <p>Giving value to money for perfect packaging.</p>
                    </div>
                    <div className="mission fade-in">
                        <h2 className="header-text">Our Mission</h2>
                        <ul>
                            <li>To be the best in the industry</li>
                            <li>To provide quality job for our customers</li>
                            <li>To meet our customer specification</li>
                            <li>To deliver promptly</li>
                            <li>To maintain integrity, quality & timeliness</li>
                        </ul>
                    </div>
                </section>

                <section className="executives-section fade-in">
                    <h2 className="header-text">Our Executives</h2>
                    <div className="executives-profiles">
                        {executives.map((executive, index) => (
                            <ExecutiveProfile
                                key={index}
                                name={executive.name}
                                position={executive.position}
                                imageUrl={executive.imageUrl}
                                bio={executive.bio}
                                className="fade-in"
                            />
                        ))}
                    </div>
                </section>
            </div>

            <section className="packaging-solution-cta fade-in">
                <div className="cta-content">
                    <h2>FIND YOUR PACKAGING SOLUTION TODAY!</h2>
                    <Link to="/contact" className="contact-us-button">CONTACT US</Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
