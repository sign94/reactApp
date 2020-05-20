import React from "react";
import styles from "./Card.scss";
import listData from "../../data/dataStore";
class Card extends React.Component {
  return() {
    <section className={styles.component}>
      render(<h2>{listData.title}</h2>);
    </section>;
  }
}

export default Card;
