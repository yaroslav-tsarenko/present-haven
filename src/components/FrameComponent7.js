import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`gift-cards-content-wrapper ${className}`}>
      <div className="gift-cards-content">
        <div className="gift-cards-heading">
          <div className="heading-1-uk-gift-cards-gi-parent">
            <h1 className="heading-1">Why Choose Gift Cards?</h1>
            <div className="gift-cards-are">
              Gift cards are the perfect solution for any gifting dilemma. They
              offer the recipient the freedom to choose exactly what they want,
              ensuring they get something they’ll love. Plus, gift cards are
              convenient, easy to send, and always appreciated.
            </div>
          </div>
          <div className="section-iframe-body">
            <div className="customer-review">
              <div className="link-our">Our customers say</div>
              <div className="excellent">Excellent</div>
              <img className="link-img" alt="" src="/link--img.svg" />
              <div className="strong-47">
                4.7 out of 5 based on 4,268 reviews
              </div>
              <img className="link-img1" alt="" src="/link--img-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
