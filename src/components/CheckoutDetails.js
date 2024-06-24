import PropTypes from "prop-types";
import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details4 ${className}`}>
      <input
        className="checkout-title1"
        placeholder="Checkout Details"
        type="text"
      />
      <div className="subtotal-total">
        <div className="subtotal-values">
          <div className="cart-subtotal1">Cart Subtotal</div>
          <div className="grand-total-label">$360.00</div>
        </div>
      </div>
      <div className="tax-details">
        <div className="shipping-costs">
          <div className="cost-breakdown">
            <div className="shipping-handling1">{`Shipping & Handling`}</div>
            <div className="other-taxes1">Other Taxes</div>
          </div>
          <div className="other-tax-labels">
            <div className="div60">$0.00</div>
            <div className="div61">$0.00</div>
          </div>
        </div>
      </div>
      <div className="tax-divider">
        <div className="company-info" />
      </div>
      <div className="subtotal-total1">
        <div className="grand-total-group">
          <div className="grand-total1">Grand Total</div>
          <div className="div62">$360.00</div>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;
