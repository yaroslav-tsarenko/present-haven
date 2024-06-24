import ParagraphBackgroundHorizonta1 from "./ParagraphBackgroundHorizonta1";
import ParagraphBackgroundHorizonta from "./ParagraphBackgroundHorizonta";
import PropTypes from "prop-types";
import "./MainContent.css";

const MainContent = ({ className = "" }) => {
  return (
    <div className={`main-content ${className}`}>
      <div className="product-listing">
        <div className="link-wrapper">
          <div className="link">
            <a
              className="home"
              href="https://www.figma.com/design/JKY0ko6QmKDT99HEm9QUXh?node-id=2-2"
              target="_blank"
            >
              Home
            </a>
          </div>
        </div>
        <div className="card-sort">{`>`}</div>
        <div className="all-cards-a-z">All Cards A-Z</div>
      </div>
      <div className="product-grid">
        <div className="product-row1">
          <div className="product-item">
            <div className="product-card">
              <img
                className="border-icon"
                loading="lazy"
                alt=""
                src="/border@2x.png"
              />
              <img
                className="container-icon16"
                loading="lazy"
                alt=""
                src="/container1@2x.png"
              />
            </div>
            <div className="container14">
              <img
                className="all20gift20cards20rectangle-icon"
                loading="lazy"
                alt=""
                src="/202220all20gift20cards20rectangle20brand20logos-microsoft20storepng@2x.png"
              />
              <div className="container15">
                <div className="backgroundborder8" />
                <div className="backgroundborder9" />
              </div>
            </div>
          </div>
          <div className="microsoft-store-lifestyle-gif-parent">
            <h1 className="microsoft-store-lifestyle">
              Microsoft Store (Lifestyle Gift Card)
            </h1>
            <div className="div63">£20.00</div>
            <div className="product-options">
              <div className="label-choose">Choose Amount</div>
              <div className="options">
                <div className="container16">
                  <div className="select">Select:</div>
                </div>
                <div className="selectphp-wrapper">
                  <img className="selectphp-icon" alt="" src="/selectphp.svg" />
                </div>
              </div>
            </div>
            <div className="backgroundborder-parent">
              <div className="backgroundborder10">
                <div className="quantity-label">
                  <b className="b">–</b>
                </div>
                <div className="input-qty">
                  <div className="container17">
                    <div className="placeholder">1</div>
                  </div>
                </div>
                <div className="quantity-label1">
                  <b className="b1">+</b>
                </div>
              </div>
              <button className="button8">
                <div className="add-to-basket">Add to Basket</div>
              </button>
            </div>
            <div className="brand-tag">
              <div className="brand">Brand</div>
              <div className="lifestyle1">Life:style</div>
            </div>
            <div className="description-finding-the-container">
              <span className="description-finding-the-container1">
                <p className="description">
                  <span className="description1">
                    <span>Description:</span>
                  </span>
                </p>
                <p className="blank-line">
                  <span className="blank-line1">
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className="finding-the-perfect">
                  Finding the perfect gift has never been easier with our
                  diverse range of gift cards. Whether it’s for a birthday,
                  anniversary, wedding, holiday, or just a simple “thank you,”
                  our gift cards offer a convenient and thoughtful way to show
                  you care. Give the gift of choice and let your loved ones pick
                  exactly what they want from their favorite stores.
                </p>
                <p className="key-features">Key Features:</p>
                <ul className="wide-selection-of-retailers-o">
                  <li className="wide-selection-of-retailers-o1">
                    <span className="wide-selection-of">
                      Wide Selection of Retailers: Our gift cards are redeemable
                      at a broad spectrum of popular stores and online
                      merchants, ensuring your recipient finds something they
                      truly desire.
                    </span>
                  </li>
                  <li className="flexible-denominations-choose">
                    <span className="flexible-denominations-choose1">
                      Flexible Denominations: Choose from a variety of
                      denominations to suit your budget and the occasion, giving
                      you complete flexibility.
                    </span>
                  </li>
                  <li className="instant-delivery-opt-for-inst">
                    <span className="instant-delivery-opt">
                      Instant Delivery: Opt for instant email delivery for those
                      last-minute gifts, or select a physical card for a
                      traditional touch.
                    </span>
                  </li>
                  <li className="no-expiry-date-enjoy-peace-of">
                    <span className="no-expiry-date">
                      No Expiry Date: Enjoy peace of mind with no expiration
                      date, allowing recipients to use their gift card whenever
                      they choose.
                    </span>
                  </li>
                  <li className="personalized-messages-add-a-p">
                    <span className="personalized-messages-add">
                      Personalized Messages: Add a personal touch with a
                      customized message to make your gift extra special.
                    </span>
                  </li>
                </ul>
                <p className="blank-line2">&nbsp;</p>
                <p className="why-choose-our">Why Choose Our Gift Cards?</p>
                <p className="our-gift-cards">
                  Our gift cards take the guesswork out of gifting. Whether
                  you’re shopping for a picky friend, a family member who has
                  everything, or a colleague, our gift cards ensure they get
                  something they’ll love. Plus, with the ability to choose from
                  a variety of top retailers, they’ll have endless options.
                </p>
              </span>
            </div>
            <div className="horizontalborder">
              <ParagraphBackgroundHorizonta1
                heading3WhereCanISpendThe="Where can I spend the Microsoft Store (Lifestyle Gift Card)?"
                symbol=""
              />
              <div className="horizontalborder1">
                <div className="go-shopping-in-container">
                  <p className="go-shopping-in">
                    Go shopping in 3 simple steps. Visit the Life:style website
                    enter your
                  </p>
                  <p className="voucher-reference-and">
                    voucher reference and email address to register your gift
                    card. Choose
                  </p>
                  <p className="golf-direct-as">
                    Golf Direct as the brand you would like to swap your
                    Life:style gift card
                  </p>
                  <p className="for-and-then">
                    for and then wait to receive your e-code straight to your
                    email provided
                  </p>
                  <p className="to-spend-at">to spend at Golf Direct.</p>
                </div>
              </div>
              <ParagraphBackgroundHorizonta1
                heading3WhereCanISpendThe="Can a Microsoft Store (Lifestyle Gift Card) be used online?"
                symbol=""
                propGap="25.2px"
                propMinWidth="318px"
              />
              <ParagraphBackgroundHorizonta heading3HowDoICheckMyGift="How do I check my gift card balance?" />
              <ParagraphBackgroundHorizonta
                heading3HowDoICheckMyGift="How long are gift cards valid?"
                propWidth="248.4px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
