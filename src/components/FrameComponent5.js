import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`unsure-content-wrapper ${className}`}>
      <div className="unsure-content">
        <div className="heading-2-not-sure-which-gif-parent">
          <h1 className="heading-22">Explore Endless Possibilities</h1>
          <div className="discover-a-world">{`Discover a world of limitless shopping with the  Gift Card. This versatile gift card opens the door to millions of products, from cutting-edge electronics and bestselling books to stylish fashion and essential home goods. `}</div>
        </div>
        <div className="link-wishcard20banners-01p-parent">
          <img
            className="link-wishcard20banners-01p"
            loading="lazy"
            alt=""
            src="/link--wishcard20banners01png@2x.png"
          />
          <img
            className="link-wishcard20banners-02p"
            loading="lazy"
            alt=""
            src="/link--wishcard20banners02png@2x.png"
          />
          <img
            className="link-wishcard20banners-03p"
            loading="lazy"
            alt=""
            src="/link--wishcard20banners03png@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
