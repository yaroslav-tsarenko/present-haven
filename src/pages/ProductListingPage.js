import PageHeader from "../components/PageHeader";
import CardContainers5 from "../components/CardContainers5";
import CardContainers4 from "../components/CardContainers4";
import CardContainers3 from "../components/CardContainers3";
import CardContainers2 from "../components/CardContainers2";
import CardContainers1 from "../components/CardContainers1";
import CardContainers from "../components/CardContainers";
import Footer2 from "../components/Footer2";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <header className="header1">
        <div className="background-parent">
          <div className="background">
            <div className="container">
              <div className="free-wallet-with">
                Free wallet with every order and greeting cards available for
                purchase
              </div>
            </div>
            <div className="icon" />
            <div className="icon1" />
          </div>
          <div className="logo-container-parent">
            <div className="logo-container">
              <div className="logo">
                <div className="logo-image-container-parent">
                  <div className="logo-image-container">
                    <img className="logo-image-icon" alt="" src="/vector.svg" />
                  </div>
                  <div className="present-haven">Present Haven</div>
                </div>
              </div>
            </div>
            <nav className="nav-list">
              <nav className="nav-links">
                <a className="item-link">All Gift Cards</a>
                <a className="item-link1">Category</a>
                <a className="item-link2">Occasion</a>
                <a className="item-link3">WishCard</a>
                <a className="item-link4">Greeting Cards</a>
                <a className="item-link5">How to Buy</a>
                <a className="item-link6">For Business</a>
                <a className="item-link7">Helping Hand</a>
              </nav>
            </nav>
            <div className="search-container-wrapper">
              <div className="search-container">
                <div className="search-icon-wrapper">
                  <img className="search-icon" alt="" src="/vector-1.svg" />
                </div>
                <img className="link-icon" alt="" src="/link.svg" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="content-container-wrapper">
        <section className="content-container">
          <PageHeader />
          <div className="product-cards">
            <CardContainers5
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-lifestyle20ultimate121png2@2x.png"
              adidasGiftCardLifestyle="Adidas Gift Card (Life:style)"
            />
            <CardContainers4
              container="/container2@2x.png"
              prop="£10.00"
              prop1="£100.00"
              aldi="Aldi"
              aldiBlueGiftcard="Aldi Blue Giftcard"
            />
            <div className="card-containers">
              <img className="container-icon" alt="" src="/container2@2x.png" />
              <div className="card-containers-inner">
                <div className="parent">
                  <div className="div">£10.00</div>
                  <div className="div1">{`-  `}</div>
                  <div className="div2">£100.00</div>
                </div>
              </div>
              <div className="aldi">Aldi</div>
              <div className="aldi-blue-giftcard">Aldi Blue Giftcard</div>
            </div>
            <div className="card-containers1">
              <img
                className="container-icon1"
                alt=""
                src="/container-21@2x.png"
              />
              <div className="card-containers-child">
                <div className="group">
                  <div className="div3">£10.00</div>
                  <div className="div4">{`-  `}</div>
                  <div className="div5">£100.00</div>
                </div>
              </div>
              <div className="aldi1">Aldi</div>
              <div className="aldi-orange-giftcard">Aldi Orange Giftcard</div>
            </div>
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-all20bar20onepng1@2x.png"
              prop="£15.00"
              prop1="£200.00"
              theDiningOutGiftCard="The Dining Out Gift Card"
              allBarOneGiftCardDiningOu="All Bar One Gift Card (Dining Out)"
            />
            <div className="card-containers2">
              <div className="container1">
                <img
                  className="link-202220all20gift20car"
                  loading="lazy"
                  alt=""
                  src="/link--202220all20gift20cards20rectangle20brand20logos-alton20towerspng1@2x.png"
                />
                <div className="container2">
                  <div className="backgroundborder" />
                  <div className="backgroundborder1" />
                </div>
              </div>
              <div className="frame-div">
                <div className="parent1">
                  <div className="div6">£10.00</div>
                  <div className="div7">{`-  `}</div>
                  <div className="div8">£500.00</div>
                </div>
              </div>
              <div className="leisure-vouchers">Leisure Vouchers</div>
              <div className="alton-towers-leisure">
                Alton Towers (Leisure Vouchers)
              </div>
            </div>
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-amalfipng@2x.png"
              prop="£10.00"
              prop1="£125.00"
              theDiningOutGiftCard="The Restaurant Card"
              allBarOneGiftCardDiningOu="Amalfi (The Restaurant Card)"
              propTop="442px"
              propLeft="345px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.9px"
              propDisplay="inline-block"
              propMinWidth="67.8px"
            />
            <div className="card-containers3">
              <img
                className="container-icon2"
                alt=""
                src="/container-32@2x.png"
              />
              <div className="card-containers-inner1">
                <div className="parent2">
                  <div className="div9">£10.00</div>
                  <div className="div10">{`-  `}</div>
                  <div className="div11">£100.00</div>
                </div>
              </div>
              <div className="american-golf">American Golf</div>
              <div className="american-golf-gift">American Golf Gift Card</div>
            </div>
            <div className="card-containers4">
              <img
                className="container-icon3"
                alt=""
                src="/container-41@2x.png"
              />
              <div className="card-containers-inner2">
                <div className="parent3">
                  <div className="div12">£10.00</div>
                  <div className="div13">{`-  `}</div>
                  <div className="div14">£100.00</div>
                </div>
              </div>
              <div className="argos">Argos</div>
              <div className="argos-gift-card">Argos Gift Card</div>
            </div>
            <div className="card-containers5">
              <img
                className="container-icon4"
                alt=""
                src="/container-51@2x.png"
              />
              <div className="card-containers-inner3">
                <div className="parent4">
                  <div className="div15">£15.00</div>
                  <div className="div16">{`-  `}</div>
                  <div className="div17">£100.00</div>
                </div>
              </div>
              <div className="arsenal-fc">Arsenal FC</div>
              <div className="arsenal-football-club">
                Arsenal Football Club Gift Card
              </div>
            </div>
            <CardContainers2
              container="/container-61@2x.png"
              prop="£10.00"
              prop1="£150.00"
              asda="Asda"
              asdaGiftCard="Asda Gift Card"
            />
            <CardContainers2
              container="/container-71@2x.png"
              prop="£10.00"
              prop1="£250.00"
              asda="Ask Italian"
              asdaGiftCard="Ask Italian Gift Card"
              propLeft="345px"
              propWidth="57.9px"
              propDisplay="unset"
              propMinWidth="unset"
              propWidth1="76.9px"
              propMinWidth1="76.9px"
            />
            <CardContainers2
              container="/container-8@2x.png"
              prop="£20.00"
              prop1="£200.00"
              asda="Asos"
              asdaGiftCard="ASOS Gift Card"
              propLeft="690px"
              propWidth="61.1px"
              propDisplay="unset"
              propMinWidth="unset"
              propWidth1="34.9px"
              propMinWidth1="34.9px"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos20bmpng@2x.png"
              prop="£20.00"
              prop1="£100.00"
              theDiningOutGiftCard="MyToolbox Card"
              allBarOneGiftCardDiningOu={`B&M (MyToolbox Card)`}
              propTop="884px"
              propLeft="1035px"
              propTop1="calc(50% - 97.5px)"
              propWidth="61.1px"
              propDisplay="inline-block"
              propMinWidth="69.3px"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos20bqpng@2x.png"
              prop="£20.00"
              prop1="£100.00"
              theDiningOutGiftCard="MyToolbox Card"
              allBarOneGiftCardDiningOu={`B&Q (MyToolbox Card)`}
              propTop="884px"
              propLeft="1380px"
              propTop1="calc(50% - 97.5px)"
              propWidth="61.1px"
              propDisplay="inline-block"
              propMinWidth="69.3px"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-bananatreepng@2x.png"
              prop="£10.00"
              prop1="£125.00"
              theDiningOutGiftCard="The Restaurant Card"
              allBarOneGiftCardDiningOu="Banana Tree (The Restaurant Card)"
              propTop="1326px"
              propLeft="0px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.9px"
              propDisplay="inline-block"
              propMinWidth="67.8px"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-belhavenpng@2x.png"
              prop="£10.00"
              prop1="£250.00"
              theDiningOutGiftCard="The Great British Pub"
              allBarOneGiftCardDiningOu="Belhaven (Great British Pub)"
              propTop="1326px"
              propLeft="345px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.9px"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-bella20italiapng@2x.png"
              prop="£10.00"
              prop1="£200.00"
              theDiningOutGiftCard="The Restaurant Card"
              allBarOneGiftCardDiningOu="Bella Italia (The Restaurant Card)"
              propTop="1326px"
              propLeft="690px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.9px"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <CardContainers5
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-blackwellspng@2x.png"
              adidasGiftCardLifestyle="Blackwell's (Lifestyle Gift Card)"
              propTop="1326px"
              propLeft="1035px"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-bloom20wildpng@2x.png"
              prop="£20.00"
              prop1="£100.00"
              theDiningOutGiftCard="MyToolbox Card"
              allBarOneGiftCardDiningOu={`Bloom & Wild (MyToolbox Card)`}
              propTop="1326px"
              propLeft="1380px"
              propTop1="calc(50% - 97.5px)"
              propWidth="61.1px"
              propDisplay="inline-block"
              propMinWidth="69.3px"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-blue20diamondpng@2x.png"
              prop="£10.00"
              prop1="£250.00"
              theDiningOutGiftCard="National Garden"
              allBarOneGiftCardDiningOu="Blue Diamond (National Garden)"
              propTop="1768px"
              propLeft="0px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.9px"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <div className="card-containers6">
              <img
                className="container-icon5"
                alt=""
                src="/container-9@2x.png"
              />
              <div className="card-containers-inner4">
                <div className="parent5">
                  <div className="div18">£15.00</div>
                  <div className="div19">{`-  `}</div>
                  <div className="div20">£100.00</div>
                </div>
              </div>
              <div className="boohoo">Boohoo</div>
              <div className="boohoo-gift-card">Boohoo Gift Card</div>
            </div>
            <div className="card-containers7">
              <img
                className="container-icon6"
                alt=""
                src="/container-10@2x.png"
              />
              <div className="card-containers-inner5">
                <div className="parent6">
                  <div className="div21">£10.00</div>
                  <div className="div22">{`-  `}</div>
                  <div className="div23">£250.00</div>
                </div>
              </div>
              <div className="boots">Boots</div>
              <div className="boots-gift-card">Boots Gift Card</div>
            </div>
            <div className="card-containers8">
              <img
                className="container-icon7"
                alt=""
                src="/container-111@2x.png"
              />
              <div className="card-containers-inner6">
                <div className="parent7">
                  <div className="div24">£10.00</div>
                  <div className="div25">{`-  `}</div>
                  <div className="div26">£200.00</div>
                </div>
              </div>
              <div className="inspire-travel-card">Inspire Travel Card</div>
              <div className="british-airways-by">
                British Airways By Inspire Travel
              </div>
            </div>
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-british20garden20centrespng@2x.png"
              prop="£10.00"
              prop1="£250.00"
              theDiningOutGiftCard="National Garden"
              allBarOneGiftCardDiningOu="British Garden Centres (National Garden)"
              propTop="1768px"
              propLeft="1380px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.9px"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--all20gift20cards20rectangle20brand20logos-brownspng@2x.png"
              prop="£15.00"
              prop1="£200.00"
              theDiningOutGiftCard="The Dining Out Gift Card"
              allBarOneGiftCardDiningOu="Browns Gift Card (Dining Out)"
              propTop="2210px"
              propLeft="0px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.2px"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <div className="card-containers9">
              <img
                className="container-icon8"
                alt=""
                src="/container-111@2x.png"
              />
              <div className="card-containers-inner7">
                <div className="parent8">
                  <div className="div27">£10.00</div>
                  <div className="div28">{`-  `}</div>
                  <div className="div29">£200.00</div>
                </div>
              </div>
              <div className="inspire-travel-card1">Inspire Travel Card</div>
              <div className="butlins-by-inspire">
                Butlin's By Inspire Travel
              </div>
            </div>
            <CardContainers5
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-buyagiftpng@2x.png"
              adidasGiftCardLifestyle="Buyagift Card (Life:style)"
              propTop="2210px"
              propLeft="690px"
            />
            <div className="card-containers10">
              <div className="container3">
                <img
                  className="link-202220all20gift20car1"
                  alt=""
                  src="/link--202220all20gift20cards20rectangle20brand20logos-cafe20rougepng@2x.png"
                />
                <div className="container4">
                  <div className="backgroundborder2" />
                  <div className="backgroundborder3" />
                </div>
              </div>
              <div className="card-containers-inner8">
                <div className="parent9">
                  <div className="div30">£10.00</div>
                  <div className="div31">{`-  `}</div>
                  <div className="div32">£125.00</div>
                </div>
              </div>
              <div className="the-restaurant-card">The Restaurant Card</div>
              <div className="caf-rouge-the-restaurant-car-wrapper">
                <div className="caf-rouge-the">
                  Café Rouge (The Restaurant Card)
                </div>
              </div>
            </div>
            <CardContainers1
              container="/container-13@2x.png"
              caffeNero="Caffe Nero"
              caffNeroGiftCard="Caffé Nero Gift Card"
            />
            <CardContainers
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-calvin20kleinpng@2x.png"
              prop="£20.00"
              prop1="£200.00"
              asos="Asos"
              calvinKleinAsosGiftCard="Calvin Klein (Asos Gift Card)"
            />
            <CardContainers
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-cancer20research20ukpng@2x.png"
              prop="£20.00"
              prop1="£100.00"
              asos="Life:style"
              calvinKleinAsosGiftCard="Cancer Research UK (Lifestyle Giftcard)"
              propLeft="345px"
              propTop="2652px"
              propTop1="calc(50% - 98px)"
              propWidth="61.1px"
              propDisplay="inline-block"
              propMinWidth="69.3px"
              propWidth1="67.2px"
              propMinWidth1="67.2px"
            />
            <div className="card-containers11">
              <img
                className="container-icon9"
                alt=""
                src="/container-111@2x.png"
              />
              <div className="card-containers-inner9">
                <div className="parent10">
                  <div className="div33">£10.00</div>
                  <div className="div34">{`-  `}</div>
                  <div className="div35">£200.00</div>
                </div>
              </div>
              <div className="inspire-travel-card2">Inspire Travel Card</div>
              <div className="carnival-by-inspire">
                Carnival By Inspire Travel
              </div>
            </div>
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--all20gift20cards20rectangle20brand20logos-carpetrightpng@2x.png"
              prop="£20.00"
              prop1="£100.00"
              theDiningOutGiftCard="MyToolbox Card"
              allBarOneGiftCardDiningOu="Carpetright (MyToolbox Card)"
              propTop="2652px"
              propLeft="1035px"
              propTop1="calc(50% - 97.5px)"
              propWidth="61.1px"
              propDisplay="inline-block"
              propMinWidth="69.3px"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-caseablepng@2x.png"
              prop="£20.00"
              prop1="£100.00"
              theDiningOutGiftCard="MyToolbox Card"
              allBarOneGiftCardDiningOu="Caseable (MyToolbox Card)"
              propTop="2652px"
              propLeft="1380px"
              propTop1="calc(50% - 97.5px)"
              propWidth="61.1px"
              propDisplay="inline-block"
              propMinWidth="69.3px"
            />
            <CardContainers
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-caulderspng@2x.png"
              prop="£10.00"
              prop1="£250.00"
              asos="National Garden"
              calvinKleinAsosGiftCard="Caulders (National Garden)"
              propLeft="0px"
              propTop="3094px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.9px"
              propDisplay="unset"
              propMinWidth="unset"
              propWidth1="118.3px"
              propMinWidth1="118.3px"
            />
            <CardContainers4
              container="/container-15@2x.png"
              prop="£25.00"
              prop1="£175.00"
              aldi="Champneys"
              aldiBlueGiftcard="Champneys Gift Card"
              propTop="3094px"
              propWidth="unset"
              propDisplay="unset"
              propFlex="1"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-chef2020brewerspng@2x.png"
              prop="£10.00"
              prop1="£175.00"
              theDiningOutGiftCard="The Great British Pub"
              allBarOneGiftCardDiningOu={`Chef & Brewer (Great British Pub)`}
              propTop="3094px"
              propLeft="690px"
              propTop1="calc(50% - 97.5px)"
              propWidth="57.9px"
              propDisplay="inline-block"
              propMinWidth="67.6px"
            />
            <CardContainers3
              link202220ALL20GIFT20CARD="/link--202220all20gift20cards20rectangle20brand20logos-chessington148png@2x.png"
              prop="£10.00"
              prop1="£500.00"
              theDiningOutGiftCard="Leisure Vouchers"
              allBarOneGiftCardDiningOu="Chessington (Leisure Vouchers)"
              propTop="3094px"
              propLeft="1035px"
              propTop1="calc(50% - 98px)"
              propWidth="57.9px"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <CardContainers1
              container="/container-16@2x.png"
              caffeNero="Claire's"
              caffNeroGiftCard="Claire's Gift Card"
              propTop="3094px"
              propAlignSelf="unset"
              propWidth="53.3px"
              propDisplay="flex"
              propMinWidth="53.3px"
            />
          </div>
        </section>
      </main>
      <Footer2 />
    </div>
  );
};

export default ProductListingPage;
