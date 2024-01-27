import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/nw.css";
import { Card1 } from "../widgets/cards";

const cardsData = [
  {
    name: "Sunset technologies",
    title: "Read more >",
    img: require("../assets/publicImg/why2.png"),
    desc: "breaking new ground with carbon removal purchases and investments to help nvestments to help nvestments to help",
  },
  {
    name: "Sunset technologies",
    title: "Read more >",
    img: require("../assets/publicImg/why3.png"),
    desc: "breaking new ground with carbon removal purchases and investments to help nvestments to help nvestments to help",
  },
  {
    name: "Sunset technologies",
    title: "Read more >",
    img: require("../assets/publicImg/why3.png"),
    desc: "breaking new ground with carbon removal purchases and investments to help nvestments to help nvestments to help",
  },
];

export default class NetworksScreen extends Component {
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
        <div className="nwA">
          <div className="nwAa">
            <div className="nwAaA">IMPACT INVESTORS</div>
            <div className="nwAaB">
              Impact investing has become increasingly popular in recent years,
              as more investors are looking to align their investments with
              their values and make a positive impact in the world. Impact
              investors are powerful force for good, helping to finance
              businesses and projects that have the potential to create positive
              change in society and the environment.
            </div>
          </div>
        </div>
        <div className="nwB">
          <div className="nwBa">We are joining hands for impact</div>
          <div className="nwBb">
            As the world becomes more aware of the impact of climate change and
            the need to transition to a low-carbon economy, eco-friendly
            investments are becoming more popular than ever. Eco-friendly
            investors are individuals or organizations that seek to invest in
            companies and projects that have a positive impact on the
            environment. If you are an entrepreneur or business owner with an
            eco-friendly product or service, collaboration with eco-friendly
            investors can be a great way to not only raise capital, but also
            gain valuable expertise and connections.
          </div>
        </div>
        <div className="nwC">
          <div className="nwCa">Imapct created so far</div>
          <div className="nwCb">
            The Biggest part of donations are coming from Canada, Russia and
            India.
          </div>
          <div className="nwCc">
            <div className="nwCcA">
              <div className="nwCcAa">$200,000,735</div>
              <div className="nwCcAb">Total Donation Amount</div>
              <div className="nwCcAc">
                <div className="nwCcAcA">
                  <div className="nwCcAcAa">$03</div>
                  <div className="nwCcAcAb">The Smallest donate we got</div>
                </div>
                <div className="nwCcAcA">
                  <div className="nwCcAcAa">$2,357</div>
                  <div className="nwCcAcAb">The Biggest donate we got</div>
                </div>
              </div>
            </div>
            <div className="nwCcB">
              <div className="nwCcBa"></div>
              <div className="nwCcBb">READ THE FULL REPORT</div>
            </div>
          </div>
          <div className="nwCd">
            *The Data is Provided for the Period from 26.02.2022 to 20.12.2022
          </div>
        </div>
        <div className="nwD">
          <div className="nwDa">Our Impact investors</div>
          <Card1 reverse data={cardsData[2]} />
          <Card1 reverse data={cardsData[2]} />
          <Card1 reverse data={cardsData[2]} />
        </div>

        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
