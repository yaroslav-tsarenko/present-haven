import PropTypes from "prop-types";
import "./Footer3.css";

const Footer3 = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer1">
        <div className="container9">
          <div className="footer-info">
            <div className="footer-links">
              <div className="footer-categories">
                <div className="shopping-parent">
                  <div className="shopping">Shopping</div>
                  <div className="horizontal-divider" />
                </div>
                <div className="all-gift-cards-parent">
                  <a
                    className="all-gift-cards"
                    href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-583"
                    target="_blank"
                  >
                    All Gift Cards
                  </a>
                  <div className="e-gift-cards">E-Gift Cards</div>
                  <div className="greeting-cards">Greeting Cards</div>
                </div>
              </div>
              <div className="footer-categories1">
                <div className="our-company-parent">
                  <div className="our-company">Our Company</div>
                  <div className="horizontal-divider1" />
                </div>
                <div className="contact-us-parent">
                  <div className="contact-us">Contact Us</div>
                  <a
                    className="wish-card"
                    href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-6138"
                    target="_blank"
                  >
                    Wish Card
                  </a>
                  <div className="gift-cards-for">Gift Cards for Business</div>
                </div>
              </div>
              <div className="footer-categories2">
                <div className="information-parent">
                  <div className="information">Information</div>
                  <div className="horizontal-divider2" />
                </div>
                <div className="item-link-parent">
                  <div className="item-link8">
                    <div className="privacy-policy">Privacy Policy</div>
                  </div>
                  <div className="item-link9">
                    <div className="terms-conditions">{`Terms & Conditions`}</div>
                  </div>
                  <div className="site-map">Site Map</div>
                </div>
              </div>
            </div>
          </div>
          <div className="background1">
            <div className="the-gift-card">
              © 2024 The Gift Card Centre Ltd.
            </div>
            <div className="payment-icons">
              <div className="cards">
                <img
                  className="cc-visapng-icon"
                  loading="lazy"
                  alt=""
                  src="/cc-visapng@2x.png"
                />
                <img
                  className="cc-mastercardpng-icon"
                  loading="lazy"
                  alt=""
                  src="/cc-mastercardpng@2x.png"
                />
              </div>
            </div>
            <img
              className="cc-american-expresspng-icon"
              loading="lazy"
              alt=""
              src="/cc-american-expresspng@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer3.propTypes = {
  className: PropTypes.string,
};

export default Footer3;
