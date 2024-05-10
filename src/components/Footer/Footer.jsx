import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="innerWidth paddings flexCenter f-container">
                <div className="flexColStart f-left">
                    <img src="./logo2.png" width={120} alt="" />
                    <span className="secondaryText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                        <br />
                        Lorem ipsum dolor sit amet consectetur.
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <div className="flexColStart f-right-text">
                        <span className="primaryText">Information</span>
                        <span className="secondaryText">Lorem ipsum dolor sit amet.</span>
                    </div>

                    <div className="flexCenter f-links">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer