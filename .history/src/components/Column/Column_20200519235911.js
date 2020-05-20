import React from "react";
import styles from "./Column.scss";
import icon from "../Icon/Icon.js";

class Column extends React.Component {
  state = {
    columns: this.props.Card || [],
  };
  render() {
    const { title, icon, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        {cards.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
