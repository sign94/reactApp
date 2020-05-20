import React from "react";
import styles from "./Hero.scss";
import ReactHtmlParser from "react-html-parser";

const Hero = (props) => {
  //const logo = "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png";
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
      <img className={styles.image} src={props.logo} />
      <img />
    </header>
  );
};

export default Hero;
