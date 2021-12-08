import * as React from "react";
import styles from "./TradeSkillCard.module.scss";

export interface TradeSkillCardProps {
  language: string;
  img: any;
  type: string;
}

export interface TradeSkillCardState {}

export default class TradeSkillCard extends React.Component<
  TradeSkillCardProps,
  TradeSkillCardState
> {
  constructor(props: TradeSkillCardProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles["table-containger"]}>
        <div className={styles["radialProgressBar"]}>
          <span className={styles["tradeSkillName"]}>{this.props.type}</span>
        </div>
        <img src={this.props.img} alt="Icon" />
      </div>
    );
  }
}
