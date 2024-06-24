import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`header-wrapper ${className}`}>
      <header className="header7">
        <div className="background-container">
          <div className="background5">
            <div className="container13">
              <div className="free-wallet-with2">
                Free wallet with every order and greeting cards available for
                purchase
              </div>
            </div>
            <div className="icon5" />
            <div className="icon6" />
          </div>
          <div className="frame-parent21">
            <div className="logo-frame">
              <div className="logo2">
                <div className="logo-wrapper1">
                  <div className="vector-container">
                    <img
                      className="vector-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="present-haven2">Present Haven</div>
                </div>
              </div>
            </div>
            <nav className="nav-list2">
              <nav className="nav-links2">
                <a className="item-link22">All Gift Cards</a>
                <a className="item-link23">Category</a>
                <a className="item-link24">Occasion</a>
                <a className="item-link25">WishCard</a>
                <a className="item-link26">Greeting Cards</a>
                <a className="item-link27">How to Buy</a>
                <a className="item-link28">For Business</a>
                <a className="item-link29">Helping Hand</a>
              </nav>
            </nav>
            <div className="frame-wrapper4">
              <div className="frame-parent22">
                <div className="vector-frame">
                  <img className="vector-icon2" alt="" src="/vector-1.svg" />
                </div>
                <img
                  className="link-icon2"
                  loading="lazy"
                  alt=""
                  src="/link.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
