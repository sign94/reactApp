import React from "react";
import styles from "./Card.scss";
import listData from "../../data/dataStore";
class Card extends React.Component {
  render() {
    const { title } = this.props;
    return <p className={styles.component}>{title}</p>;
  }
}
export default Card;
