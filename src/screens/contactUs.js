import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/cu.css";

export default class ContactUsScreen extends Component {
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
        <div className="cuA">
          <div className="cuAa">CONTACT US</div>
          <div className="cuAb">We love to hear from you.</div>
        </div>
        <div className="cuB">
          <div className="cuBa">
            <div className="cuBaA">
              <div className="cuBaAa">Reach us out at:</div>hello@ie.money
            </div>
          </div>
          <div className="cuBa">
            <div className="cuBaA">
              <div className="cuBaAa">Schedule a meeting</div>Select date and
              time
            </div>
          </div>
        </div>
      
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
