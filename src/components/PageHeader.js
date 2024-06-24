import PropTypes from "prop-types";
import "./PageHeader.css";

const PageHeader = ({ className = "" }) => {
  return (
    <div className={`page-header ${className}`}>
      <div className="all-cards-a-z1">All Cards A-Z</div>
      <h3 className="heading-11">All Cards A-Z</h3>
      <div className="thegiftcardcentre-has-one-of-t-wrapper">
        <div className="thegiftcardcentre-has-one-container">
          <span>
            <p className="thegiftcardcentre-has-one">
              TheGiftCardCentre has one of the biggest selections of UK physical
              gift cards for you to choose from. All are dispatched same working
              day when you order before 1pm (excluding weekends). Next working
              day
            </p>
            <p className="delivery-available-and">
              delivery available, and fabulous greeting cards to make your pack
              extra special
            </p>
          </span>
        </div>
      </div>
      <div className="filter-sort">
        <div className="container22">
          <div className="items">224 Items</div>
          <div className="sort-container">
            <div className="sort-by-name">Sort by:  Name</div>
            <div className="sort-icon-wrapper">
              <img className="sort-icon" alt="" src="/vector-2.svg" />
            </div>
          </div>
        </div>
        <div className="horizontalborder2">
          <div className="pagination-container">
            <div className="pagination-link-container">
              <img className="icon7" alt="" src="/icon1.svg" />
            </div>
            <div className="div75">1</div>
          </div>
          <div className="border-items">2</div>
          <div className="border-items1">3</div>
          <div className="link-container">
            <img className="link-icon3" alt="" src="/link-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;
