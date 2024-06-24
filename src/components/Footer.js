import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer2 ${className}`}>
      <div className="footer3">
        <div className="container11">
          <div className="footer-links1">
            <div className="footer-links-content">
              <div className="frame-parent14">
                <div className="shopping-group">
                  <div className="shopping1">Shopping</div>
                  <div className="horizontal-divider3" />
                </div>
                <div className="footer-link-items">
                  <a
                    className="all-gift-cards1"
                    href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-583"
                    target="_blank"
                  >
                    All Gift Cards
                  </a>
                  <div className="e-gift-cards1">E-Gift Cards</div>
                  <div className="greeting-cards1">Greeting Cards</div>
                </div>
              </div>
              <div className="frame-parent15">
                <div className="our-company-group">
                  <div className="our-company1">Our Company</div>
                  <div className="horizontal-divider4" />
                </div>
                <div className="contact-us-group">
                  <div className="contact-us1">Contact Us</div>
                  <a
                    className="wish-card1"
                    href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-6138"
                    target="_blank"
                  >
                    Wish Card
                  </a>
                  <div className="gift-cards-for1">Gift Cards for Business</div>
                </div>
              </div>
              <div className="frame-parent16">
                <div className="information-group">
                  <div className="information1">Information</div>
                  <div className="horizontal-divider5" />
                </div>
                <div className="item-link-group">
                  <div className="item-link18">
                    <div className="privacy-policy1">Privacy Policy</div>
                  </div>
                  <div className="item-link19">
                    <div className="terms-conditions1">{`Terms & Conditions`}</div>
                  </div>
                  <div className="site-map1">Site Map</div>
                </div>
              </div>
            </div>
          </div>
          <div className="background3">
            <div className="the-gift-card1">
              © 2024 The Gift Card Centre Ltd.
            </div>
            <div className="payment-icons1">
              <div className="cc-visapng-parent">
                <img
                  className="cc-visapng-icon1"
                  loading="lazy"
                  alt=""
                  src="/cc-visapng1@2x.png"
                />
                <img
                  className="cc-mastercardpng-icon1"
                  loading="lazy"
                  alt=""
                  src="/cc-mastercardpng1@2x.png"
                />
              </div>
            </div>
            <img
              className="cc-american-expresspng-icon1"
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

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
