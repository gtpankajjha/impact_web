import React, { Component, StrictMode, useRef } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/hm.css";

import bgVedio from "../assets/background/bg1.mp4";
import FINAL_1 from "../assets/video/FINAL_1.mp4"

export default class HomeScreen extends Component {
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
        <div className="hmB">
          {/* <video autoPlay loop muted className="hmBa">
            <source src={bgVedio} type="video/mp4" />
          </video> */}
          <div className="hmBa"></div>
          <br />
          <div className="hmBb">
            <div style={{  textAlign: 'center',alignSelf:'center',width:'100%' }}>
              <div className="hmba-text"><span>About Us</span></div>
              <div className="hmba-text">IE Money</div>
              <div className="hmba-text">Get Ie Money</div>
            </div>
            <div >
              <video autoPlay loop muted className="hmBab">
                <source src={FINAL_1} type="video/mp4" />
              </video></div>
            <div style={{  textAlign: 'center',alignSelf:'center',width:'100%'  }}>
              <div className="hmba-text-second">Resourses</div>
              <div className="hmba-text-second">Grant Application</div>
              <div className="hmba-text-second">Join Discussion</div>
            </div>
          </div>
          <div className="hmBc" />
        </div>
        {/* //////////////////////////////////////////////////////////////// */}
        <div className="hmC">
          {/* <div className="hmCa">Introducing</div>
          <div className="hmCb">IE.Money</div> */}
          <div className="hmCc">
          {`A Holistic Solution Including Non-Profit
          Grants,Community Currency, Regenerative 
          Product Discounts, And Rewards For 
          Ecosystem Services & Impact Investments`}
          </div>
          <div className="backimage" >
            {/* <img src="../assets/background/bg11.png" 
          style={{height:'297px',width:'297px'}}
          /> */}
          </div>
          {/* <div className="hmCd">Join The Waitlist</div> */}
        </div>
        {/* <Container3 /> */}
        <Container4 />
        <Container6 />
        <Container5 state={state} />
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}

function Container3() {
  const myRef = useRef(null);
  const executeScroll = () => {
    const left = myRef.current.scrollLeft + 880;
    myRef.current.scrollTo({ left, behavior: "smooth" });
  };
  return (
    <div className="hmE" ref={myRef}>
      <div className="hmEa">
        <div className="hmEaA">PEOPLE PLANET PROSPERITY</div>
        <div className="hmEaB">
          Impact Ecosystem brings together businesses, communities, government,
          individuals, NGOs and mother nature to achieve mutual prosperity.
        </div>
      </div>

      <div className="hmEb c10">
        <div className="hmEbA">
          <div className="hmEbAa">01</div>
          <div className="hmEbAb" onClick={executeScroll} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Bring A Smile</div>
          <div className="hmEbBb">
            Human health and happines are central to our mission!
          </div>
        </div>
      </div>
      <div className="hmEb c11">
        <div className="hmEbA">
          <div className="hmEbAa">02</div>
          <div className="hmEbAb" onClick={executeScroll} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Regenerative Economy</div>
          <div className="hmEbBb">
            Make the world a better place for future generation not only gives
            our lives meaning, purpose and ethical value, but it provides
            economic, health and social benifit as well.
          </div>
        </div>
      </div>
      <div className="hmEb c12">
        <div className="hmEbA">
          <div className="hmEbAa">03</div>
          <div className="hmEbAb" onClick={executeScroll} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Preserve Biodiversity</div>
          <div className="hmEbBb">
            Nature isn't just nice to look at, it is essential for food
            production, a thriving economy and human survival
          </div>
        </div>
      </div>
      <div className="hmEb c13">
        <div className="hmEbA">
          <div className="hmEbAa">04</div>
          <div className="hmEbAb" onClick={executeScroll} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Empower Communities</div>
          <div className="hmEbBb">
            Human have been the most ingenious and social species on the planet.
            While we are far from perfect, our ability to share, cooperate,
            learn from and help each other are the keys for us to prospor in the
            short loang run.
          </div>
        </div>
      </div>
    </div>
  );
}


function Container4() {
  return (
    <div className="main-container">
    <div className="main-box">
    <div className="column-container">
        <div className="column-box blue">The Philanthropic<br/> Currency</div>
        <div className="column-box orange">Powered by Impact Investments,<br/> Natural Capital & Team Humanity</div>
      </div>
      <div className="yellow-box">Hello</div>
      
    </div>
  </div>
  );
}

function Container5({ state }) {
  const { navScreen } = state;
  return (
    <div className="hmH">
      <div className="hmHa">HOW IMPACT ECOSYSTEM WORKS</div>
      <div className="hmHc">
        <div className="hmHcA">1.</div>
        <div className="hmHcB">
        Impact Ecosystem helps Communities implement their own
        currency designed to achieve local goals, and economic resiliency.
        </div>
      </div>
      <div className="hmHc">
        <div className="hmHcA">2.</div>
        <div className="hmHcB">
        There are numerous ways your community currency can
        be distributed to residents and other stakeholders.
        </div>
      </div>
      <div className="hmHc">
        <div className="hmHcA">3.</div>
        <div className="hmHcB">
        Like gift cards, loyalty points and government currency,
        value can be:
          <div className="hmHcBb">
            <div className="hmHcBbA">
              <div className="hmHcBbAa" />
              USED FOR <br />
              PURCHASES
            </div>
            <div className="hmHcBbA">
              <div className="hmHcBbAa" />
              TRANSFERRED/
              <br />
              GIFTED/DONATED
            </div>
            <div className="hmHcBbA">
              <div className="hmHcBbAa" />
              GIVEN AS A REWARD
              <br />
              TO INCENTIVIZE
            </div>
          </div>
        </div>
      </div>
     
      <div className="hmHc">
        <div className="hmHcA">4.</div>
        <div className="hmHcB">
        Merchants & Ecosystem Partners who accept ie.Money as payment can
        redeem ie.Money for local currency like $USD OR spend/transfer/gift/donate
        within the Impact Ecosystem.
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      <div className="hmHa">Our Ethos</div>
      <div className="hmHe">
        <div className="hmHeA" >
          <div className="hmHeAb">
          <div className="hmHeAc">Compassion</div>
          <div className="hmHeAd">
          Our first core value is compassion, which is the ability to empathize 
          with those who are less fortunate and marginalised than us. It involves
          recognizing the suffering and struggles of
           others and feeling motivated to help them in any way possible.
          </div>
            </div>
        </div>
        <div className="hmHeA" >
          <div className="hmHeAb">
          <div className="hmHeAc">Integrity</div>
          <div className="hmHeAd">
          The second core value of charity donation projects is integrity,
           which refers to the adherence to a set of moral and ethical principles.
            This includes being honest, transparent, and accountable for the funds raised
           and how they are used to make our planet and people better.
          </div>
            </div>
        </div>
        <div className="hmHeA" >
          <div className="hmHeAb">
          <div className="hmHeAc">Collaboration</div>
          <div className="hmHeAd">
          Collaboration refers to working together with other organizations,
           community members, and stakeholders to achieve shared goals. This
           involves building strong relationships and partnerships, leveraging resources, and 
          coordinating efforts to maximize the impact of the charity's work.
          </div>
            </div>
        </div>
        <div className="hmHeA" >
          <div className="hmHeAb">
          <div className="hmHeAc">Impact</div>
          <div className="hmHeAd">
          As our organization's name suggests, Impact involves creating 
          tangible, measurable outcomes that positively affect the lives
           of those in need. This requires careful planning, implementation,
           and evaluation of the programs and projects supported by the charity.
          </div>
            </div>
        </div>

      </div>
      
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      <div className="hmHa">AREAS OF INTERESTS</div>
      <div className="hmHd">
        <div className="hmHdA c20" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">INDIVIDUALS</div>
        </div>
        <div className="hmHdA c21" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">NGOs AND NON PROFIT ORGANIZATION</div>
        </div>
        <div className="hmHdA c22" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">
            LANDOWNERS-ENVIRONMENTAL SERVICE PROVIDERS
          </div>
        </div>
        <div className="hmHdA c23" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">IMPACT INVESTORS</div>
        </div>
        <div className="hmHdA c24" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">BUSINESSES</div>
        </div>
        <div className="hmHdA c25" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">ENVIRONMENTAL ACCOUNTANTS</div>
        </div>
      </div>
      <div className="hmHf">WHERE DO YOU FIT INTO THIS POWERFUL NETWORK?</div>
    </div>
  );
}

function Container6() {
  const myRef = useRef(null);
  const executeScroll = () => {
    const left = myRef.current.scrollLeft + 880;
    myRef.current.scrollTo({ left, behavior: "smooth" });
  };
  return (
    <div className="hmE" ref={myRef}>
    <h1>Hello</h1>
    </div>
  );
}

