import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/bl.css";

export default class BlogsScreen extends Component {
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
        <div className="blA">
          <div className="blAa">OUR BLOGS</div>
          <div className="blAb">
            A place to share stories, news and the successes of our users
          </div>
        </div>
        <MyCard data={{ title: "TRENDING" }} />
        <MyCard data={{ title: "IMPACT STORIES" }} />
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}

function MyCard({ data }) {
  return (
    <div className="blH">
      <div className="blHa">{data?.title}</div>
      <div className="blHe">
        <div className="blHeA">
          <div className="blHeAa">
            <div className="blHeAaA" />
            <div className="blHeAaB">Paul Sheparo</div>
            <div className="blHeAaC">29 Aug 2022</div>
          </div>
          <div className="blHeAb"></div>
          <div className="blHeAc">Forestation in Nepal</div>
          <div className="blHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
        <div className="blHeA">
          <div className="blHeAa">
            <div className="blHeAaA" />
            <div className="blHeAaB">Paul Sheparo</div>
            <div className="blHeAaC">29 Aug 2022</div>
          </div>
          <div className="blHeAb"></div>
          <div className="blHeAc">Forestation in Nepal</div>
          <div className="blHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
        <div className="blHeA">
          <div className="blHeAa">
            <div className="blHeAaA" />
            <div className="blHeAaB">Paul Sheparo</div>
            <div className="blHeAaC">29 Aug 2022</div>
          </div>
          <div className="blHeAb"></div>
          <div className="blHeAc">Forestation in Nepal</div>
          <div className="blHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
      </div>
    </div>
  );
}
