import React from 'react';
import staffRecruitment2 from '../assets/staff-recruitment2.svg';
import devOps2 from '../assets/dev-ops2.svg';
import cloudMigration2 from '../assets/cloud-migration2.svg';
import aiServices2 from '../assets/ai-services2.svg';

const ServicesSection = () => {
    return (
        <div className="frame-2147224479">
            <div className="frame-2147224477">
                <div className="frame-2147224478">
                    <div className="ellipse-1478"></div>
                    <div className="our-services">OUR SERVICES</div>
                </div>
                <div className="comprehensive-tech-solutions-for-modern-businesses">
                    <span>
                        <span className="comprehensive-tech-solutions-for-modern-businesses-span">
                            Comprehensive Tech Solutions for
                        </span>
                        <span className="comprehensive-tech-solutions-for-modern-businesses-span2">
                            Modern Businesses
                        </span>
                    </span>
                </div>
                <div className="we-deliver-end-to-end-technology-services-designed-to-help-businesses-scale-efficiently-innovate-faster-and-stay-competitive-in-a-rapidly-evolving-digital-landscape">
                    We deliver end-to-end technology services designed to help businesses
                    scale efficiently, innovate faster, and stay competitive in a rapidly
                    evolving digital landscape.
                </div>
            </div>
            <div className="frame-2147224476">
                <div className="frame-2147224475">
                    <div className="frame-2147224473">
                        <div className="frame-2147224471">
                            <div className="frame-2147224470">
                                <img className="staff-recruitment3" src={staffRecruitment2} alt="" />
                                <div className="staff-recruitment4">Staff Recruitment</div>
                                <div className="specialized-recruitment-solutions-for-engineering-product-and-technical-roles-we-provide-access-to-pre-vetted-professionals-who-align-with-your-company-culture-technology-stack-and-long-term-business-goals">
                                    Specialized recruitment solutions for engineering, product, and
                                    technical roles. We provide access to pre-vetted professionals
                                    who align with your company culture, technology stack, and
                                    long-term business goals.
                                </div>
                                <div className="learn-more">Learn More →</div>
                            </div>
                        </div>
                        <div className="frame-2147224472">
                            <div className="frame-2147224470">
                                <img className="dev-ops3" src={devOps2} alt="" />
                                <div className="dev-ops4">DevOps</div>
                                <div className="optimize-your-development-lifecycle-with-modern-dev-ops-practices-from-ci-cd-automation-to-infrastructure-management-we-help-teams-deliver-faster-more-reliable-and-scalable-software-solutions">
                                    Optimize your development lifecycle with modern DevOps
                                    practices. From CI/CD automation to infrastructure management,
                                    we help teams deliver faster, more reliable, and scalable
                                    software solutions.
                                </div>
                                <div className="learn-more">Learn More →</div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-2147224474">
                        <div className="frame-2147224471">
                            <div className="frame-2147224470">
                                <img className="cloud-migration3" src={cloudMigration2} alt="" />
                                <div className="cloud-migration4">Cloud Migration</div>
                                <div className="seamlessly-transition-your-applications-and-data-to-the-cloud-with-minimal-disruption-our-cloud-migration-services-ensure-security-performance-and-scalability-while-reducing-operational-complexity">
                                    Seamlessly transition your applications and data to the cloud
                                    with minimal disruption. Our cloud migration services ensure
                                    security, performance, and scalability while reducing
                                    operational complexity.
                                </div>
                                <div className="learn-more">Learn More →</div>
                            </div>
                        </div>
                        <div className="frame-2147224472">
                            <div className="frame-2147224470">
                                <img className="ai-services3" src={aiServices2} alt="" />
                                <div className="ai-services4">AI Services</div>
                                <div className="leverage-artificial-intelligence-to-transform-your-business-operations-we-design-and-implement-ai-driven-solutions-that-enhance-decision-making-automate-workflows-and-unlock-valuable-insights-from-data">
                                    Leverage artificial intelligence to transform your business
                                    operations. We design and implement AI-driven solutions that
                                    enhance decision-making, automate workflows, and unlock valuable
                                    insights from data.
                                </div>
                                <div className="learn-more">Learn More →</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
