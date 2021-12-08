import * as React from "react";
import styles from "./TradeSkillCardDetails.module.scss";

export interface TradeSkillDetailsProps {}

export interface TradeSkillDetailsState {
  auxiliaryMaterials: string;
}

export default class TradeSkillDetails extends React.Component<
  TradeSkillDetailsProps,
  TradeSkillDetailsState
> {
  constructor(props: TradeSkillDetailsProps) {
    super(props);
    this.state = { auxiliaryMaterials: "" };
  }
  render() {
    return (
      <div className={styles["container"]}>
        <div className={styles["x"]}>
          <span>Materials: </span>
          <br />
          <div className={styles["box"]}></div>
          <div className={styles["box"]}></div>
          <div className={styles["box"]}></div>
          <div className={styles["box"]}></div>
          <div className={styles["box"]}></div>
        </div>
        <div className={styles["y"]}>
          <span>Tool : </span>
          <br />
          <div className={styles["box"]}></div>
          <div className={styles["box"]}></div>
          <div className={styles["box"]}></div>
          <div className={styles["box"]}></div>
          <div className={styles["box"]}></div>
        </div>
        <div className={styles["z"]}>
          <span>Creafting Lists: </span>
          <br />
        </div>
        <div className={styles["v"]}>v</div>
      </div>
    );
  }
}
