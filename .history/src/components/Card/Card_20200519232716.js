import React from "react";
import styles from "./Card.scss";
import listData from "../../data/dataStore";
class Card extends React.Component {
  return() {
    render(<h2>{listData.title}</h2>);
  }
}
