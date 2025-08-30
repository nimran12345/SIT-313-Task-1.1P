import React from "react";
import HeaderBar from "./HeaderBar";
import IntroBanner from "./IntroBanner";
import ArticleSection from "./ArticleSection";
import TutorialSection from "./TutorialSection";
import SubscribeSection from "./SubscribeSection";
import FooterBar from "./FooterBar";

function App() {
  return (
    <div>
      <HeaderBar/>
      <IntroBanner/>
      <ArticleSection/>
      <TutorialSection/>
      <SubscribeSection/>
      <FooterBar/>
    </div>
  );
}

export default App;
