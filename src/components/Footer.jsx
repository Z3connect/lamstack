import React from 'react';
import group1 from '../assets/group1.svg';
import group20 from '../assets/group-20.svg';
import { FaLinkedinIn, FaGoogle, FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="footer-17">
                <div className="frame-164"></div>
                <div className="frame-160">
                    <div className="frame-2147224487">
                        <div className="frame-2147224482">
                            <div className="frame-165">
                                <div className="struggling-to-find-the-right-it-solutions">
                                    Struggling to Find the Right IT Solutions?
                                </div>
                            </div>
                            <div className="frame-166">
                                <div className="we-ll-help-you-connect-with-the-right-talent-and-technology-partners-for-your-business-needs">
                                    We'll help you connect with the right talent and technology
                                    partners for your business needs.
                                </div>
                            </div>
                        </div>
                        <div className="frame-21472244612">
                            <div className="button6">
                                <div className="button-text3">Schedule a Consultation</div>
                            </div>
                            <div className="button2">
                                <div className="button-text2">Browse Opportunities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content-wrapper">
                <div className="footer-main-content">
                    <div className="footer-col-brand">
                        <img className="footer-logo" src={group20} alt="Lamstacks" />
                        <div className="footer-description">
                            We provide exceptional IT services with expertise in DevOps, IT Consulting, Mobile App Development, and Digital Transformation. Building the future, one solution at a time.
                        </div>
                        <div className="footer-social">
                            <div className="social-label">Social Media</div>
                            <div className="social-icons">
                                {/* Social Media Icons */}
                                <span className="icon"><FaLinkedinIn /></span>
                                <span className="icon"><FaGoogle /></span>
                                <span className="icon"><FaFacebookF /></span>
                                <span className="icon"><FaXTwitter /></span>
                                <span className="icon"><FaInstagram /></span>
                                <span className="icon"><FaYoutube /></span>
                            </div>
                        </div>
                        <div className="copyright-desktop">© 2025 Lamstacks. All Rights Reserved.</div>
                    </div>

                    <div className="footer-col-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Jobs</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="footer-col-services">
                        <h3>Services</h3>
                        <ul>
                            <li>Recruitment</li>
                            <li>DevOps</li>
                            <li>IT Consulting</li>
                            <li>Mobile Development</li>
                            <li>Digital Transformation</li>
                        </ul>
                    </div>

                    <div className="footer-col-contact">
                        <h3>Contact</h3>
                        <div className="contact-item">
                            +91 9952997153
                        </div>
                        <div className="contact-item">
                            Info@Lamstacks.Com
                        </div>
                        <div className="contact-address">
                            <strong>ADDRESS</strong><br />
                            Lamstacks Technologies Private Limited<br />
                            19/35, V317, Mount Road,<br />
                            Little Mount, Anna Salai,<br />
                            Tamil Nadu 600015.
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;
