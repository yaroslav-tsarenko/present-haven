import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`product-row ${className}`}>
      <div className="cart-actions">
        <div className="header6">
          <div className="header-child" />
          <div className="header-columns">
            <div className="product">Product</div>
          </div>
          <div className="header-columns1">
            <div className="price">Price</div>
          </div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        <div className="company-links">
          <img
            className="cards-icon1"
            loading="lazy"
            alt=""
            src="/cards@2x.png"
          />
          <div className="card-name">
            <div className="panorma-presents-gift1">
              {" "}
              Panorma Presents Gift Card
            </div>
          </div>
          <div className="card-price">
            <div className="policy-navigation">$120.00</div>
          </div>
          <div className="social-links">
            <div className="socials-title">
              <div className="quantity-icons">
                <img
                  className="icon-plus1"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <div className="facebook-link">1</div>
              <input className="quantity-icons1" type="checkbox" />
            </div>
            <div className="app-download">
              <div className="hourly1">Hourly</div>
              <div className="hourly-value-container">
                <img
                  className="hourly-value-container-child"
                  alt=""
                  src="/frame-1000002972.svg"
                />
              </div>
            </div>
          </div>
          <div className="copyright">$10.11</div>
        </div>
      </div>
      <FrameComponent1
        panormaPresentsGiftCard=" Panorma Presents Gift Card"
        prop="$200.00"
      />
      <FrameComponent1
        panormaPresentsGiftCard="Panorma Presents Gift Card"
        prop="$120.00"
      />
      <div className="country-links">
        <div className="country-selection" />
        <button className="button6">
          <img className="tag-icon6" alt="" src="/tag-icon.svg" />
          <div className="button7">Checkout</div>
          <img className="tag-icon7" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
