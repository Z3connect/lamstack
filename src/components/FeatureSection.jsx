import React from 'react';
import gridLayersV1 from '../assets/grid-layers-v-10.svg';
import frameBg from '../assets/frame-21472244800.png';
import play10 from '../assets/play-10.svg';

const FeatureSection = () => {
    return (
        <>
            <img className="grid-layers-v-1" src={gridLayersV1} alt="" />
            <div className="rectangle-34624351"></div>
            <div className="rectangle-34624350"></div>
            <div className="big-news-a-better-hr-experience-is-on-the-way-with-our-upcoming-hrma-launch">
                Big news — a better HR experience is on the way with our upcoming HRMA
                launch.
            </div>
            <div
                className="frame-2147224480"
                style={{
                    background: `url(${frameBg}) center`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="frame-2147224467">
                    <div className="frame-2147224465">
                        <div className="empowering-businesses-through-technology">
                            Empowering Businesses Through Technology
                        </div>
                        <div className="discover-how-we-ve-helped-hundreds-of-companies-transform-their-operations-scale-their-teams-and-accelerate-growth-through-innovative-tech-solutions">
                            Discover how we've helped hundreds of companies transform their
                            operations, scale their teams, and accelerate growth through
                            innovative tech solutions.
                        </div>
                    </div>
                    <div className="rectangle-34624521"></div>
                    <div className="frame-1984079626">
                        <img className="play-1" src={play10} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureSection;
