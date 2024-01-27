import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/ie.css";
import { Card1 } from "../widgets/cards";

const cardsData = [
  {
    name: "Carbon",
    title: "Our carbon negative projects >",
    img: require("../assets/publicImg/why2.png"),
    desc: "To meet our commitment to be carbon negative by 2030, we’re improving efficiencies; delivering technology to help our customers report and reduce their carbon emissions more effectively; and breaking new ground with carbon removal purchases and investments to help develop the carbon removal markets.",
  },
  {
    name: "Water",
    title: "Our water conservation projects >",
    img: require("../assets/publicImg/why3.png"),
    desc: "To meet our commitment to be water positive by 2030, we will continue our water stewardship work across our operations. We're also expanding access to clean water and replenishment projects.",
  },
  {
    name: "Forestation",
    title: "Our carbon negative projects >",
    img: require("../assets/publicImg/why1.png"),
    desc: "To meet our commitment to be carbon negative by 2030, we’re improving efficiencies; delivering technology to help our customers report and reduce their carbon emissions more effectively; and breaking new ground with carbon removal purchases and investments to help develop the carbon removal markets.",
  },
  {
    name: "Ethical Sustainability",
    title: "Our Ethical projects >",
    img: require("../assets/publicImg/why3.png"),
    desc: "To meet our commitment to be water positive by 2030, we will continue our water stewardship work across our operations. We're also expanding access to clean water and replenishment projects.",
  },
];

export default class IeMoneyWorksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ////////////////// SCREEN FUNCTION /////////////////////
      navScreen: props.navScreen,
    };
  }

  render() {
    const state = this.state;
    return (
      <StrictMode>
        <div className="ieA"></div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieB">
          <div className="ieBaA">
            <div className="ieBaAa" />
            <div className="ieBaAb">DISTRIBUTION</div>
            <div className="ieBaAc">STAKEHOLDERS</div>
            <div className="ieBaAc">IMPACT INVESTORS</div>
            <div className="ieBaAc">NATURAL ASSET OWNERS</div>
            <div className="ieBaAc">NONPROFITS</div>
          </div>
          <div className="ieBaA">
            <div className="ieBaAa_1" />
            <div className="ieBaAb">CIRCULATION</div>
            <div className="ieBaAc">PURCHASES</div>
            <div className="ieBaAc">LOYALTY POINTS</div>
            <div className="ieBaAc">REWARDS</div>
            <div className="ieBaAc">NONPROFITS</div>
          </div>
          <div className="ieBaA">
            <div className="ieBaAa_2" />
            <div className="ieBaAb">REDEEM</div>
            <div className="ieBaAc">REDEEM TO USD</div>
            <div className="ieBaAc">TRANSFER</div>
            <div className="ieBaAc">MERCHANT PAYMENT</div>
            <div className="ieBaAc">DONATE</div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieC">
          <div className="ieCa">
            <div className="ieCaA">1. DISTRIBUTION</div>
            <div className="ieCaB">
              IE point tokens are distributed to Ecosystem Service Stakeholders,
              Impact Investors, Natural Asset Owners & Nonprofits.
            </div>
          </div>
          <div className="ieCa">
            <div className="ieCaA">2. CIRCULATION</div>
            <div className="ieCaB">
              Like gift cards, loyalty points and government currency, value can
              be:
              <div className="ieCaBa">
                <div className="ieCaBaA">
                  <div className="ieCaBaAa" />
                  <div className="ieCaBaAb">USED FOR PURCHASES</div>
                </div>
                <div className="ieCaBaA">
                  <div className="ieCaBaAa" />
                  <div className="ieCaBaAb">TRANSFERRED/ GIFTED/ DONATED</div>
                </div>
                <div className="ieCaBaA">
                  <div className="ieCaBaAa" />
                  <div className="ieCaBaAb">
                    GIVEN AS A REWARD TO INCENTIVIZE
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ieCa">
            <div className="ieCaA">3. REDEEM</div>
            <div className="ieCaB">
              Merchants & Ecosystem Partners who accept ie.Money as payment can
              redeem ie.Money for local currency like $USD OR
              spend/transfer/gift/donate within the Impact Ecosystem.
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieD">
          <div className="ieDa">OUR AREA OF FOCUS</div>
          <div className="ieDb">
            We are committed to create a sustainable approach is that takes into
            account the social, environmental, and economic impacts of its
            operations and seeks to create long-term value for all stakeholders,
            including shareholders, employees, customers, and the broader
            community. This approach involves integrating sustainability
            considerations into every aspect of the business, from product
            design and supply chain management to marketing and communications.
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <Card1 data={cardsData[0]} />
        <div className="ieE">
          “CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON
          A WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN
          CARBONIZING OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.”
        </div>
        <Card1 reverse data={cardsData[1]} />
        <Card1 data={cardsData[2]} />
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieE">
          “CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON
          A WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN
          CARBONIZING OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.”
        </div>
        <Card1 reverse data={cardsData[3]} />
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieF">
          <div className="ieFa">JOIN IMPACT ECOSYSTEM</div>
          <div className="ieFb">
            Be part of something bigger than you or us, be a change maker.
          </div>
          <div className="ieFc">Get IE Money</div>
        </div>
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
