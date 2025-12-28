import React from 'react';
import group37380 from '../assets/group-373800.svg';
import heroImage from '../assets/hero-image0.svg';

const StatsSection = () => {
    const [counts, setCounts] = React.useState({
        clients: 0,
        satisfaction: 0,
        placements: 0,
        years: 0
    });

    React.useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        // Target values
        const targets = {
            clients: 500,
            satisfaction: 500,
            placements: 500,
            years: 15
        };

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
                clients: Math.min(Math.floor(progress * targets.clients), targets.clients),
                satisfaction: Math.min(Math.floor(progress * targets.satisfaction), targets.satisfaction),
                placements: Math.min(Math.floor(progress * targets.placements), targets.placements),
                years: Math.min(Math.floor(progress * targets.years), targets.years)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <img className="group-37380" src={group37380} alt="" />
            <div className="frame-1000002048">
                <img className="hero-image" src={heroImage} alt="" />
                <div className="frame-1000002047">
                    <div className="frame-21472244773">
                        <div className="built-in-india-trusted-worldwide-we-re-here-24-7-support">
                            <span>
                                <span className="built-in-india-trusted-worldwide-we-re-here-24-7-support-span">
                                    Built in India, trusted worldwide
                                    <br />
                                </span>
                                <span className="built-in-india-trusted-worldwide-we-re-here-24-7-support-span2">
                                    we're here 24/7 support.
                                </span>
                            </span>
                        </div>
                        <div className="the-core-values-and-principles-that-drive-us-to-deliver-excellence-across-continents">
                            The core values and principles that drive us to deliver excellence
                            across continents
                        </div>
                    </div>
                    <div className="frame-1000002046">
                        <div className="div">
                            <div className="_500">{counts.clients} +</div>
                            <div className="clients-worldwide">Clients Worldwide</div>
                        </div>
                        <div className="line-18"></div>
                        <div className="div2">
                            <div className="_500">{counts.satisfaction} +</div>
                            <div className="satisfaction-rate">Satisfaction Rate</div>
                        </div>
                        <div className="line-17"></div>
                        <div className="div3">
                            <div className="_500">{counts.placements} +</div>
                            <div className="successful-placements">Successful Placements</div>
                        </div>
                        <div className="line-19"></div>
                        <div className="div4">
                            <div className="_15">{counts.years}+</div>
                            <div className="years-of-excellence">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsSection;
