//------------------------------ import libraries
import React, { useRef } from "react";
import { useSelector } from "react-redux";

//------------------------------ import components
import MainHero from "../components/Com--Main-hero";
import CategoryCarrousel from "../components/Com--Category-carrousel";
import RecipeDashboard from "../components/Com--Recipes-dashboard";
import InstructionsSection from "../cards/Card--InstructionsSection";
import RecommendationCarrousel from "../components/Com--Recomendations-carrousel";
import Footer from "../components/Com--Footer";
import LoginModal from "../components/Com--LoginModal";

//------------------------------ import styles and images
import "../assets/components-style/Layout.scss";

//------------------------------------ COMPONENT ------------------------------------//
const LandingPage = (props) => {
  const userState = useSelector((state) => state.userReducer);

  const modalReference = useRef();
  const openLoginModal = () => {
    modalReference.current.openLoginModal();
  };
  const openSignModal = () => {
    modalReference.current.openSignModal();
  };

  if (Object.keys(userState.user).length > 0) {
    props.history.push("/walle");
  }

  return (
    <>
      <div className="Layout">
        <MainHero
          handleLoginClick={openLoginModal}
          handleSignClick={openSignModal}
        />
        <div className="Layout__body">
          <CategoryCarrousel />
          <RecipeDashboard />
          <InstructionsSection />
          <RecommendationCarrousel />
        </div>
        <Footer />
      </div>
      <LoginModal ref={modalReference} />
    </>
  );
};

export default LandingPage;