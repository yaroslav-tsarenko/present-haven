import FrameComponent from "../components/FrameComponent";
import BillingForm from "../components/BillingForm";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent checkout="Checkout" />
      <section className="checkoutpage-inner">
        <div className="billing-form-parent">
          <BillingForm />
          <div className="checkout">
            <input className="header" placeholder="Checkout" type="text" />
            <div className="checkout-details">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <button className="button">
                <img className="tag-icon" alt="" src="/tag-icon.svg" />
                <div className="button1">Checkout</div>
                <img className="tag-icon1" alt="" src="/tag-icon.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
