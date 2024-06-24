import PropTypes from "prop-types";
import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <footer className={`footer6 ${className}`}>
      <div className="footer7">
        <div className="container29">
          <div className="container-inner">
            <div className="frame-parent23">
              <div className="frame-parent24">
                <div className="shopping-parent1">
                  <div className="shopping3">Shopping</div>
                  <div className="horizontal-divider9" />
                </div>
                <div className="link-items1">
                  <a
                    className="all-gift-cards3"
                    href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-583"
                    target="_blank"
                  >
                    All Gift Cards
                  </a>
                  <div className="e-gift-cards3">E-Gift Cards</div>
                  <div className="greeting-cards4">Greeting Cards</div>
                </div>
              </div>
              <div className="frame-parent25">
                <div className="our-company-parent1">
                  <div className="our-company3">Our Company</div>
                  <div className="horizontal-divider10" />
                </div>
                <div className="contact-us-parent1">
                  <div className="contact-us3">Contact Us</div>
                  <a
                    className="wish-card3"
                    href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-6138"
                    target="_blank"
                  >
                    Wish Card
                  </a>
                  <div className="gift-cards-for3">Gift Cards for Business</div>
                </div>
              </div>
              <div className="frame-parent26">
                <div className="information-parent1">
                  <div className="information3">Information</div>
                  <div className="horizontal-divider11" />
                </div>
                <div className="item-link-parent1">
                  <div className="item-link30">
                    <div className="privacy-policy3">Privacy Policy</div>
                  </div>
                  <div className="item-link31">
                    <div className="terms-conditions3">{`Terms & Conditions`}</div>
                  </div>
                  <div className="site-map3">Site Map</div>
                </div>
              </div>
            </div>
          </div>
          <div className="background6">
            <div className="the-gift-card3">
              © 2024 The Gift Card Centre Ltd.
            </div>
            <div className="payment-icon-containers-wrapper">
              <div className="payment-icon-containers">
                <img
                  className="cc-visapng-icon3"
                  loading="lazy"
                  alt=""
                  src="/cc-visapng1@2x.png"
                />
                <img
                  className="cc-mastercardpng-icon3"
                  loading="lazy"
                  alt=""
                  src="/cc-mastercardpng1@2x.png"
                />
              </div>
            </div>
            <img
              className="cc-american-expresspng-icon3"
              loading="lazy"
              alt=""
              src="/cc-american-expresspng1@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
