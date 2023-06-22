import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  
     
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
            <h1>SALES</h1>
            <p>Convallis interdum purus adipiscing dis parturient posuere ac a quam a eleifend montes paturient posuere curae tempor</p>
            <div className="ctas">
                <div className="banner-cta" > <a id="read" href="#readme">Read More</a></div>
                <div className="banner-cta v2"><a href="#myproduct">Shop Now</a></div>
            </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
