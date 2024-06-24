import FrameComponent3 from "../components/FrameComponent3";
import MainContent from "../components/MainContent";
import RelatedProducts from "../components/RelatedProducts";
import Footer1 from "../components/Footer1";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="productpage">
      <FrameComponent3 />
      <div className="heading-21" />
      <section className="main-content-wrapper">
        <MainContent />
      </section>
      <RelatedProducts />
      <Footer1
        ccVisapng="/cc-visapng@2x.png"
        ccMastercardpng="/cc-mastercardpng@2x.png"
        ccAmericanExpresspng="/cc-american-expresspng@2x.png"
      />
    </div>
  );
};

export default ProductPage;
