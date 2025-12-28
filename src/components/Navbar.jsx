import React from 'react';
import group20 from '../assets/group-20.svg';


const Navbar = () => {
    return (
        <div className="header">
            <div className="container2">
                <div className="content2">
                    <img className="group-2" src={group20} alt="" />
                    <div className="navigation">
                        <button className="button3" type="button">
                            <div className="button-base">
                                <div className="text2">Home</div>
                            </div>
                        </button>
                        <button className="button3" type="button">
                            <div className="button-base">
                                <div className="text3">Jobs</div>
                            </div>
                        </button>
                        <button className="button3" type="button">
                            <div className="button-base">
                                <div className="text3">Services</div>
                            </div>
                        </button>
                        <button className="button3" type="button">
                            <div className="button-base">
                                <div className="text3">Abouts</div>
                            </div>
                        </button>
                        <button className="button3" type="button">
                            <div className="button-base">
                                <div className="text3">Contact</div>
                            </div>
                        </button>
                        <button className="button3" type="button">
                            <div className="button-base">
                                <div className="text3">Blog</div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="frame-2147224464">
                    <button className="button4" type="button">
                        <div className="button-base2">
                            <div className="text4">Let's Talk</div>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
