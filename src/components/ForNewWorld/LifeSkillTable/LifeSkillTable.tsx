import * as React from "react";
import styles from "./LifeSkillsView.module.scss";

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
    return <div className={styles["table-containger"]}>Hello LifeSkills</div>;
  }
}
