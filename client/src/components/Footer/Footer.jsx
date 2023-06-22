import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  
    return(
        <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo eaque
                    ipsa quae ab illo.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Sultanpur-Varansi Rd, Amethi, Mohanlal Ganj,Lucknow,
                        Uttar Pardesh, 227809
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 0914 034 5361</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: store@abhay.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <span className="text">
                    ABHAYSTORE 2023 CREATED BY ABHAY. SKILL-LYNC
                </span>
                <img src={Payment} alt=""/>
            </div>
        </div>
    </div>
);
    
};

export default Footer;