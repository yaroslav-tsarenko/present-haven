import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({
  className = "",
  ccVisapng,
  ccMastercardpng,
  ccAmericanExpresspng,
}) => {
  return (
    <footer className={`footer4 ${className}`}>
      <div className="footer5">
        <div className="container12">
          <div className="footer-links2">
            <div className="frame-parent17">
              <div className="frame-parent18">
                <div className="shopping-container">
                  <div className="shopping2">Shopping</div>
                  <div className="horizontal-divider6" />
                </div>
                <div className="link-items">
                  <a
                    className="all-gift-cards2"
                    href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-583"
                    target="_blank"
                  >
                    All Gift Cards
                  </a>
                  <div className="e-gift-cards2">E-Gift Cards</div>
                  <div className="greeting-cards2">Greeting Cards</div>
                </div>
              </div>
              <div className="frame-parent19">
                <div className="our-company-container">
                  <div className="our-company2">Our Company</div>
                  <div className="horizontal-divider7" />
                </div>
                <div className="contact-us-container">
                  <div className="contact-us2">Contact Us</div>
                  <a
                    className="wish-card2"
                    href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-6138"
                    target="_blank"
                  >
                    Wish Card
                  </a>
                  <div className="gift-cards-for2">Gift Cards for Business</div>
                </div>
              </div>
              <div className="frame-parent20">
                <div className="information-container">
                  <div className="information2">Information</div>
                  <div className="horizontal-divider8" />
                </div>
                <div className="item-link-container">
                  <div className="item-link20">
                    <div className="privacy-policy2">Privacy Policy</div>
                  </div>
                  <div className="item-link21">
                    <div className="terms-conditions2">{`Terms & Conditions`}</div>
                  </div>
                  <div className="site-map2">Site Map</div>
                </div>
              </div>
            </div>
          </div>
          <div className="background4">
            <div className="the-gift-card2">
              © 2024 The Gift Card Centre Ltd.
            </div>
            <div className="payment-logos">
              <div className="visa-mastercard">
                <img
                  className="cc-visapng-icon2"
                  loading="lazy"
                  alt=""
                  src={ccVisapng}
                />
                <img
                  className="cc-mastercardpng-icon2"
                  loading="lazy"
                  alt=""
                  src={ccMastercardpng}
                />
              </div>
            </div>
            <img
              className="cc-american-expresspng-icon2"
              loading="lazy"
              alt=""
              src={ccAmericanExpresspng}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
  ccVisapng: PropTypes.string,
  ccMastercardpng: PropTypes.string,
  ccAmericanExpresspng: PropTypes.string,
};

export default Footer1;
