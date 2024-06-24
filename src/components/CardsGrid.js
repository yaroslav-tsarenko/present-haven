import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import "./CardsGrid.css";

const CardsGrid = ({ className = "" }) => {
  return (
    <div className={`cards-grid ${className}`}>
      <div className="frame-parent1">
        <div className="container-container">
          <div className="container7">
            <img
              className="link-202220all20gift20car3"
              loading="lazy"
              alt=""
              src="/link--202220all20gift20cards20rectangle20brand20logos-lifestyle20ultimate121png@2x.png"
            />
            <div className="container8">
              <div className="backgroundborder6" />
              <div className="backgroundborder7" />
            </div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent2">
            <div className="frame-wrapper2">
              <div className="parent12">
                <div className="div39">£20.00</div>
                <div className="space">{`-  `}</div>
                <div className="div40">£100.00</div>
              </div>
            </div>
            <div className="lifestyle-wrapper">
              <div className="lifestyle">Life:style</div>
            </div>
            <div className="adidas-gift-card">
              Adidas Gift Card (Life:style)
            </div>
          </div>
        </div>
        <FrameComponent6
          link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-alton20towerspng@2x.png"
          prop="£10.00"
          prop1="£500.00"
          leisureVouchers="Leisure Vouchers"
          altonTowersLeisureVoucher="Alton Towers (Leisure Vouchers)"
        />
      </div>
      <div className="frame-parent3">
        <div className="container-parent">
          <img
            className="container-icon10"
            loading="lazy"
            alt=""
            src="/container@2x.png"
          />
          <div className="frame-parent4">
            <div className="parent13">
              <div className="div41">£10.00</div>
              <div className="div42">{`-  `}</div>
              <div className="div43">£100.00</div>
            </div>
            <div className="aldi2">Aldi</div>
            <div className="aldi-blue-giftcard1">Aldi Blue Giftcard</div>
          </div>
        </div>
        <FrameComponent6
          link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-amalfipng@2x.png"
          prop="£10.00"
          prop1="£125.00"
          leisureVouchers="The Restaurant Card"
          altonTowersLeisureVoucher="Amalfi (The Restaurant Card)"
          propGap="24px"
          propAlignSelf="stretch"
          propWidth="152.1px"
          propWidth1="57.9px"
          propDisplay="inline-block"
          propMinWidth="67.8px"
        />
      </div>
      <div className="frame-parent5">
        <div className="frame-parent6">
          <div className="container-group">
            <img
              className="container-icon11"
              alt=""
              src="/container-1@2x.png"
            />
            <div className="frame-parent7">
              <div className="parent14">
                <div className="div44">£10.00</div>
                <div className="div45">{`-  `}</div>
                <div className="div46">£100.00</div>
              </div>
              <div className="aldi3">Aldi</div>
              <div className="aldi-blue-giftcard2">Aldi Blue Giftcard</div>
            </div>
          </div>
          <div className="american-golf-card-container">
            <img
              className="container-icon12"
              alt=""
              src="/container-2@2x.png"
            />
            <div className="argos-card-content">
              <div className="argos-card-prices">
                <div className="div47">£10.00</div>
                <div className="argos-space">{`-  `}</div>
                <div className="div48">£100.00</div>
              </div>
              <div className="aldi4">Aldi</div>
              <div className="aldi-orange-giftcard1">Aldi Orange Giftcard</div>
            </div>
          </div>
        </div>
        <div className="frame-parent8">
          <div className="container-parent1">
            <img
              className="container-icon13"
              alt=""
              src="/container-3@2x.png"
            />
            <div className="frame-parent9">
              <div className="parent15">
                <div className="div49">£10.00</div>
                <div className="div50">{`-  `}</div>
                <div className="div51">£100.00</div>
              </div>
              <div className="american-golf1">American Golf</div>
              <div className="american-golf-gift1">American Golf Gift Card</div>
            </div>
          </div>
          <div className="container-parent2">
            <img
              className="container-icon14"
              alt=""
              src="/container-4@2x.png"
            />
            <div className="frame-parent10">
              <div className="parent16">
                <div className="div52">£10.00</div>
                <div className="div53">{`-  `}</div>
                <div className="div54">£100.00</div>
              </div>
              <div className="argos1">Argos</div>
              <div className="argos-gift-card1">Argos Gift Card</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardsGrid.propTypes = {
  className: PropTypes.string,
};

export default CardsGrid;
