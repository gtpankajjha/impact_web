import React, { useState } from "react";
import BlogsScreen from "./screens/blogs";
import ContactUsScreen from "./screens/contactUs";
import HomeScreen from "./screens/home";
import IeMoneyWorksScreen from "./screens/ieMoneyWorks";
import NetworksScreen from "./screens/networks";
import OurTeamScreen from "./screens/ourTeam";
import WhyImportentScreen from "./screens/whyImportent";

export default function App() {
  const currentPath = window.location.pathname.split("?")[0].split("/")[1];
  const [path, setPath] = useState(currentPath);
  const navScreen = (v) => {
    setPath(v.split("?")[0].split("/")[1]);
    window.history.replaceState("HOME", "HOME", v);
    window.scrollTo(0, 0);
  };
  if (path === "home") return <HomeScreen navScreen={navScreen} />;
  if (path === "whyImportent")
    return <WhyImportentScreen navScreen={navScreen} />;
  if (path === "ourTeam") return <OurTeamScreen navScreen={navScreen} />;
  if (path === "contactUs") return <ContactUsScreen navScreen={navScreen} />;
  if (path === "ieMoneyWorks")
    return <IeMoneyWorksScreen navScreen={navScreen} />;
  if (path === "blogs") return <BlogsScreen navScreen={navScreen} />;
  if (path === "networks") return <NetworksScreen navScreen={navScreen} />;
  return <HomeScreen navScreen={navScreen} />;
}
