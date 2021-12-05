import * as React from "react";
import styles from "./LifeSkillsView.module.scss";
import icon from "../../../assets/img/new-world/tradeSkills/arcana_trade_skill_icon_250px.png";

export interface LifeSkillTableProps {
  language: string;
  items: any;
  type: string;
}

export interface LifeSkillTableState {}

export default class LifeSkillTable extends React.Component<
  LifeSkillTableProps,
  LifeSkillTableState
> {
  constructor(props: LifeSkillTableProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles["table-containger"]}>
        <div className={styles["radialProgressBar"]}>
          <span className={styles["tradeSkillName"]}>Hello LifeSkills</span>
        </div>{" "}
        <img src={icon} alt="Icon" />
      </div>
    );
  }
}
