import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`about-content-wrapper ${className}`}>
      <div className="about-content">
        <div className="about-gift-card-parent">
          <h1 className="about-gift-card">About Gift CARD</h1>
          <div className="gift-cards-provide">
            Gift cards provide convenience and flexibility for shoppers,
            allowing recipients to choose their preferred items. For businesses,
            they offer a way to increase sales and customer loyalty by
            encouraging repeat visits and higher spending.
          </div>
        </div>
        <div className="shopper-business-retailer-parent">
          <div className="shopper-business-retailer">
            <div className="shopper-business-retailer-titl">
              <h1 className="for-shoppers">For Shoppers</h1>
              <div className="gift-cards-offer">
                Gift cards offer shoppers convenience and flexibility, allowing
                recipients to select their preferred items at their leisure.
                They can be customized with personal messages and chosen
                amounts, available in both physical and digital formats for easy
                gifting. Additionally, gift cards are secure with unique codes
                and often PINs, making them a safe and versatile gifting option.
              </div>
            </div>
            <div className="shopper-business-retailer-titl1">
              <h1 className="for-business">For Business</h1>
              <div className="for-businesses-gift">
                For businesses, gift cards are a valuable tool for increasing
                sales and fostering customer loyalty. They provide pre-paid
                revenue and often lead to higher spending as recipients
                typically spend more than the card's value. Gift cards also
                serve as effective marketing tools, promoting brand awareness
                and encouraging repeat visits, while providing insightful
                customer data that can inform business strategies.
              </div>
            </div>
            <div className="shopper-business-retailer-titl2">
              <h1 className="for-retailers">For Retailers</h1>
              <div className="retailers-benefit-from">
                Retailers benefit from gift cards through improved inventory
                management, as they represent future sales without immediate
                inventory allocation. Gift cards enhance marketing efforts,
                especially during holidays, and support customer engagement by
                offering flexible purchasing options. Additionally, they
                integrate seamlessly with POS systems for easy redemption and
                tracking, while unique codes and security measures help prevent
                fraud.
              </div>
            </div>
          </div>
          <img
            className="montage-of-online-uk-gift-card-icon"
            loading="lazy"
            alt=""
            src="/montage-of-online-uk-gift-cardswebp@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
