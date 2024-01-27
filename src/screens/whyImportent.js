import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/wi.css";
import { Card1, Card2 } from "../widgets/cards";

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

const card2Data = {
  title: "How we are impacting with small steps",
  desc: "The impact of an individual on the world is often underestimated. Every decision we make, no matter how small, has the potential to influence the world around us in a significant way. From choosing to recycle a plastic bottle to volunteering at a local charity, every action we take has the potential to make a positive difference in someone's life or to the environment.",
};

export default class WhyImportentScreen extends Component {
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
        <div className="wiA">
          <div className="wiAa">
            WE’RE BUILDING AN EQUITABLE FUTURE PHILANTHROPIC CURRENCY POWERED BY
            IMPACT INVESTMENTS, NATURAL CAPITAL & TEAM HUMANITY
          </div>
        </div>
        <Card2 data={card2Data} />
        <div className="wiC">
          IMPACT INVESTMENTS, NATURAL CAPITAL & TEAM HUMANITY ALL IN ONE PLACE,
          AVAILABLE ANYWHERE. WE MAKE IT EASIER FOR NGO'S NETWORK WITH OTHER
          MEMBERS VIA OUR TOKENS.
        </div>
        <div className="wiD">
          <div className="wiDa">Our Ethos</div>
          <div className="wiDb_">
            <div className="wiDb">
              <div className="wiDbA">
                <div className="wiDbAa">Compassion</div>
                Our first core value is compassion, which is the ability to
                empathize with those who are less fortunate and marginalised
                than us. It involves recognizing the suffering and struggles of
                others and feeling motivated to help them in any way possible.
              </div>
              <div className="wiDbA">
                <div className="wiDbAa">Integrity</div>
                The second core value of charity donation projects is integrity,
                which refers to the adherence to a set of moral and ethical
                principles. This includes being honest, transparent, and
                accountable for the funds raised and how they are used to make
                our planet and people better.
              </div>
              <div className="wiDbA">
                <div className="wiDbAa">Collaboration</div>
                Collaboration refers to working together with other
                organizations, community members, and stakeholders to achieve
                shared goals. This involves building strong relationships and
                partnerships, leveraging resources, and coordinating efforts to
                maximize the impact of the charity's work.
              </div>
              <div className="wiDbA">
                <div className="wiDbAa">Impact</div>
                As our organization's name suggests, Impact involves creating
                tangible, measurable outcomes that positively affect the lives
                of those in need. This requires careful planning,
                implementation, and evaluation of the programs and projects
                supported by the charity.
              </div>
            </div>
          </div>
        </div>
        <div className="wiE">WHY IE MONEY</div>
        <div className="wiF">
          IE money is a Holistic Solution that includes Revenue Streams for
          Ecosystem Service Stakeholders & Income for Natural Capital Owners
          with
        </div>
        <Card1 reverse data={cardsData[0]} />
        <div className="wiC">
          “CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON
          A WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN
          CARBONIZING OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.”
        </div>
        <Card1 reverse data={cardsData[1]} />
        <Card1 data={cardsData[2]} />
        <div className="wiC">
          “CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON
          A WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN
          CARBONIZING OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.”
        </div>
        <Card1 reverse data={cardsData[3]} />
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
