import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import CheckoutDetails from "../components/CheckoutDetails";
import Footer1 from "../components/Footer1";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent checkout="Your Cart" />
      <section className="cart-content">
        <div className="panorma-card-title">
          <FrameComponent2 />
          <CheckoutDetails />
        </div>
      </section>
      <Footer1
        ccVisapng="/cc-visapng1@2x.png"
        ccMastercardpng="/cc-mastercardpng1@2x.png"
        ccAmericanExpresspng="/cc-american-expresspng1@2x.png"
      />
    </div>
  );
};

export default CartDetailsPage;
