import RecommendationItems from "./RecommendationItems";
import PropTypes from "prop-types";
import "./RelatedProducts.css";

const RelatedProducts = ({ className = "" }) => {
  return (
    <section className={`related-products ${className}`}>
      <div className="recommendation">
        <div className="recommendation-title">
          <h1 className="greeting-cards3">Greeting Cards</h1>
        </div>
        <div className="recommendation-grid">
          <div className="recommendation-items1">
            <div className="container18">
              <img
                className="link-202220all20gift20car4"
                loading="lazy"
                alt=""
                src="/link--202220all20gift20cards20rectangle20brand20logos-lifestyle20ultimate121png1@2x.png"
              />
              <div className="container19">
                <div className="backgroundborder11" />
                <div className="backgroundborder12" />
              </div>
            </div>
            <div className="price-details-wrapper">
              <div className="price-details">
                <div className="div67">£20.00</div>
                <div className="price-space">{`-  `}</div>
                <div className="div68">£100.00</div>
              </div>
            </div>
            <div className="card-titles">
              <div className="lifestyle2">Life:style</div>
            </div>
            <div className="card-subtitles">
              <div className="adidas-gift-card1">
                Adidas Gift Card (Life:style)
              </div>
            </div>
          </div>
          <div className="recommendation-items2">
            <img
              className="container-icon18"
              alt=""
              src="/container-11@2x.png"
            />
            <div className="recommendation-items-child">
              <div className="parent18">
                <div className="div69">£10.00</div>
                <div className="div70">{`-  `}</div>
                <div className="div71">£100.00</div>
              </div>
            </div>
            <div className="aldi6">Aldi</div>
            <div className="aldi-blue-giftcard-wrapper">
              <div className="aldi-blue-giftcard4">Aldi Blue Giftcard</div>
            </div>
          </div>
          <RecommendationItems
            container="/container-11@2x.png"
            aldiBlueGiftcard="Aldi Blue Giftcard"
          />
          <RecommendationItems
            container="/container-31@2x.png"
            aldiBlueGiftcard="Aldi Orange Giftcard"
          />
          <div className="recommendation-items3">
            <div className="container20">
              <img
                className="link-202220all20gift20car5"
                loading="lazy"
                alt=""
                src="/link--202220all20gift20cards20rectangle20brand20logos-all20bar20onepng@2x.png"
              />
              <div className="container21">
                <div className="backgroundborder13" />
                <div className="backgroundborder14" />
              </div>
            </div>
            <div className="recommendation-items-inner1">
              <div className="parent19">
                <div className="div72">£15.00</div>
                <div className="div73">{`-  `}</div>
                <div className="div74">£200.00</div>
              </div>
            </div>
            <div className="the-dining-out">The Dining Out Gift Card</div>
            <div className="all-bar-one">
              All Bar One Gift Card (Dining Out)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RelatedProducts.propTypes = {
  className: PropTypes.string,
};

export default RelatedProducts;
