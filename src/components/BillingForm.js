import PropTypes from "prop-types";
import "./BillingForm.css";

const BillingForm = ({ className = "" }) => {
  return (
    <form className={`billing-form ${className}`}>
      <div className="billing-content">
        <h2 className="checkout2">Checkout</h2>
        <input className="header3" placeholder="Billing Details" type="text" />
        <div className="form-field-block">
          <div className="row-1">
            <div className="block-1">
              <div className="first-name">First Name</div>
            </div>
            <div className="block-2">
              <div className="last-name">Last Name</div>
            </div>
          </div>
          <div className="row-2">
            <div className="block-11">
              <div className="company-name">Company Name</div>
            </div>
            <div className="block-21">
              <div className="country">Country</div>
              <img className="icon4" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="row-3">
            <div className="block-12">
              <div className="street-address">Street Address</div>
            </div>
          </div>
          <div className="block-22">
            <div className="apartment-suite">
              Apartment / Suite / Unit / etc. (Optional)
            </div>
          </div>
          <div className="row-4">
            <div className="block-13">
              <div className="town-city">Town / City</div>
            </div>
          </div>
          <div className="block-23">
            <input
              className="email-address"
              placeholder="Email Address"
              type="text"
            />
          </div>
          <div className="row-5">
            <div className="block-14">
              <div className="zip">ZIP</div>
            </div>
            <div className="block-24">
              <div className="phone">Phone</div>
            </div>
          </div>
        </div>
        <div className="billing-separator" />
        <div className="billing-header-items">
          <button className="button2">
            <img className="tag-icon2" alt="" src="/tag-icon.svg" />
            <div className="button3">Back</div>
            <img className="tag-icon3" alt="" src="/tag-icon.svg" />
          </button>
          <button className="button4">
            <img className="tag-icon4" alt="" src="/tag-icon.svg" />
            <div className="button5">Checkout</div>
            <img className="tag-icon5" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
      <div className="billing-header">
        <div className="checkout-details1">
          <button className="header4">
            <div className="checkout-details2">Checkout Details</div>
          </button>
          <div className="cart-subtotal-parent">
            <div className="cart-subtotal">Cart Subtotal</div>
            <div className="order-detail-values">$360.00</div>
          </div>
          <div className="shipping-handling-parent">
            <div className="shipping-handling">{`Shipping & Handling`}</div>
            <div className="div57">$0.00</div>
          </div>
          <div className="other-taxes-parent">
            <div className="other-taxes">Other Taxes</div>
            <div className="div58">$0.00</div>
          </div>
          <div className="order-details-separator" />
          <div className="grand-total-parent">
            <div className="grand-total">Grand Total</div>
            <div className="div59">$360.00</div>
          </div>
        </div>
        <div className="transfer-options">
          <input
            className="header5"
            placeholder="Transfer Options"
            type="text"
          />
          <div className="checkout-details3">
            <div className="logos-block">
              <div className="block-15">
                <div className="logo-block">
                  <img
                    className="image-1-icon"
                    loading="lazy"
                    alt=""
                    src="/image-1@2x.png"
                  />
                </div>
                <div className="bank-transfer">
                  <p className="bank">Bank</p>
                  <p className="transfer">Transfer</p>
                </div>
              </div>
              <div className="block-25">
                <div className="logo-block1">
                  <img
                    className="image-2-icon"
                    loading="lazy"
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
                <div className="google-pay">
                  <p className="google">Google</p>
                  <p className="pay">Pay</p>
                </div>
              </div>
            </div>
            <div className="block-3-parent">
              <div className="block-3">
                <div className="logo-block2">
                  <img
                    className="image-3-icon"
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <div className="apple-pay">
                  <p className="apple">Apple</p>
                  <p className="pay1">Pay</p>
                </div>
              </div>
              <div className="block-4">
                <div className="logo-block3">
                  <img
                    className="image-4-icon"
                    loading="lazy"
                    alt=""
                    src="/image-4@2x.png"
                  />
                </div>
                <div className="paypal">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

BillingForm.propTypes = {
  className: PropTypes.string,
};

export default BillingForm;
