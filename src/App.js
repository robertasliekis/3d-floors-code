import React, { useEffect } from "react";
import { connect } from "react-redux";
import FloorsScene from "./components/FloorsScene";
import InfoWindow from "./components/InfoWindow";
import { setWindowWidth } from "./actions";

//"homepage": "//https://robertasliekis.github.io/3d-floors/",

function App({ setWindowWidth }) {
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="website-wrapper">
      <FloorsScene />
      <InfoWindow />
    </div>
  );
}

const mapDispatchToProps = {
  setWindowWidth
};

export default connect(null, mapDispatchToProps)(App);
