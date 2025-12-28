import React from 'react';
import image0 from '../assets/image0.png';
import womanImage from '../assets/beautiful-young-woman-posing-smiling-confident-mood-1146893-1130-10.png';
import njedaLogo from '../assets/_6739968198-fc-4326-f-58-e-3396-njeda-logo-300-x-112-11.png';
import quotes0 from '../assets/quotes0.svg';
import image1 from '../assets/image1.png';
import quotes1 from '../assets/quotes1.svg';
import previous0 from '../assets/previous0.svg';
import next0 from '../assets/next0.svg';

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const testimonials = [
        {
            id: 0,
            content: (
                <div className="testimonal">
                    <div className="frame-1">
                        <img className="image" src={image0} alt="" />
                        <img className="beautiful-young-woman-posing-smiling-confident-mood-1146893-1130-1" src={womanImage} alt="" />
                    </div>
                    <div className="testimonial">
                        <div className="partnering-with-organization-was-one-of-the-best-decisions-we-ve-made-for-our-business-their-website-template-is-sleek-easy-to-customize-and-optimizes-performance-on-all-devices-our-customers-have-been-praising-the-new-design-and-we-ve-noticed-improved-engagement-metrics-across-the-board">
                            "Partnering with organization was one of the best decisions
                            we've made for our business. Their website template is sleek, easy
                            to customize, and optimizes performance on all devices. Our
                            customers have been praising the new design, and we've noticed
                            improved engagement metrics across the board."
                        </div>
                        <div className="name-company">
                            <div className="frame-2147224481">
                                <div className="michael-turner">Michael Turner</div>
                                <div className="product-manager-at-cloud-sync">
                                    Product Manager at CloudSync
                                </div>
                            </div>
                        </div>
                        <img className="_6739968198-fc-4326-f-58-e-3396-njeda-logo-300-x-112-1" src={njedaLogo} alt="" />
                    </div>
                    <img className="quotes" src={quotes0} alt="" />
                </div>
            )
        },
        {
            id: 1,
            content: (
                <div className="testimonal">
                    <div className="frame-1">
                        <img className="image" src={image1} alt="" />
                    </div>
                    <div className="testimonial2">
                        <div className="our-online-store-s-sales-have-skyrocketed-after-working-with-company-the-template-they-provided-was-modern-user-friendly-and-fully-responsive-we-couldn-t-be-happier-with-the-results-their-support-throughout-the-process-was-exceptional">
                            Our online store's sales have skyrocketed after working with
                            company. The template they provided was modern, user-friendly, and
                            fully responsive. We couldn't be happier with the results. Their
                            support throughout the process was exceptional!
                        </div>
                        <div className="name-company2">
                            <div className="emily-rogers">Emily Rogers</div>
                            <div className="owner-of-style-boutique">Owner of StyleBoutique</div>
                        </div>
                    </div>
                    <img className="quotes2" src={quotes1} alt="" />
                </div>
            )
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <>
            <div className="rectangle-34624522"></div>
            <div className="frame-21472244802">
                <div className="testimonal-set">
                    {testimonials[activeIndex].content}
                </div>
                <div className="slider">
                    <img
                        className="previous"
                        src={previous0}
                        alt="Previous"
                        onClick={prevTestimonial}
                        style={{ cursor: 'pointer' }}
                    />
                    <div className="ellipses">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={index === activeIndex ? "ellipse" : "ellipse2"}
                                onClick={() => setActiveIndex(index)}
                                style={{ cursor: 'pointer' }}
                            ></div>
                        ))}
                    </div>
                    <img
                        className="next"
                        src={next0}
                        alt="Next"
                        onClick={nextTestimonial}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
            <div className="frame-21472244772">
                <div className="frame-2147224478">
                    <div className="ellipse-1478"></div>
                    <div className="testimonials">TESTIMONIALS</div>
                </div>
                <div className="what-our-clients-say">What Our Clients Say</div>
                <div className="real-experiences-from-companies-that-have-transformed-their-teams-and-technology-with-lam-stacks">
                    Real experiences from companies that have transformed their teams and
                    technology with LamStacks
                </div>
            </div>
        </>
    );
};

export default TestimonialSection;
