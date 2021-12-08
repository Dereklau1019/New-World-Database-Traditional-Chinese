import * as React from "react";
import styles from "../main.module.scss";
import TradeSkillCard from "components/ForNewWorld/TradeSkill/TradeSkillCard";
import TradeSkillDetails from "components/ForNewWorld/TradeSkill/TradeSkillDetails";
//======================= Import Img from assets folder =====================================================
import arcana from "../../assets/img/new-world/tradeSkills/arcana_trade_skill_icon_250px.png";
import armoring from "../../assets/img/new-world/tradeSkills/armoring_trade_skill_icon_250px.png";
import cooking from "../../assets/img/new-world/tradeSkills/cooking_trade_skill_icon_250px.png";
import engineering from "../../assets/img/new-world/tradeSkills/engineering_trade_skill_icon_250px.png";
import fishing from "../../assets/img/new-world/tradeSkills/fishing_trade_skill_icon_250px.png";
import furnishing from "../../assets/img/new-world/tradeSkills/furnishing_trade_skill_icon_250px.png";
import harvesting from "../../assets/img/new-world/tradeSkills/harvesting_trade_skill_icon_250px.png";
import jewelcrafting from "../../assets/img/new-world/tradeSkills/jewelcrafting_trade_skill_icon_250px.png";
import leatherworking from "../../assets/img/new-world/tradeSkills/leatherworking_trade_skill_icon_250px.png";
import logging from "../../assets/img/new-world/tradeSkills/logging_trade_skill_icon_250px.png";
import mining from "../../assets/img/new-world/tradeSkills/mining_trade_skill_icon_250px.png";
import skinning from "../../assets/img/new-world/tradeSkills/skinning_trade_skill_icon_250px.png";
import smelting from "../../assets/img/new-world/tradeSkills/smelting_trade_skill_icon_250px.png";
import stonecutting from "../../assets/img/new-world/tradeSkills/stonecutting_trade_skill_icon_250px.png";
import weaponsmithing from "../../assets/img/new-world/tradeSkills/weaponsmithing_trade_skill_icon_250px.png";
import weaving from "../../assets/img/new-world/tradeSkills/weaving_trade_skill_icon_250px.png";
import woodworking from "../../assets/img/new-world/tradeSkills/woodworking_trade_skill_icon_250px.png";

export interface LifeSkillsProps {}

export interface LifeSkillsState {
  language: string;
  items: string;
  type: string;
}

export default class LifeSkills extends React.Component<
  LifeSkillsProps,
  LifeSkillsState
> {
  constructor(props: LifeSkillsProps) {
    super(props);
    this.state = {
      language: "TC",
      items: "",
      type: "",
    };
  }

  getIconImport(key: string) {
    if (key === "Armoring") {
      return armoring;
    }
    if (key === "Cooking") {
      return cooking;
    }
    if (key === "Engineering") {
      return engineering;
    }
    if (key === "Fishing") {
      return fishing;
    }
    if (key === "Furnishing") {
      return furnishing;
    }
    if (key === "Harvesting") {
      return harvesting;
    }
    if (key === "Jewel Crafting") {
      return jewelcrafting;
    }
    if (key === "Leather Working") {
      return leatherworking;
    }
    if (key === "Logging") {
      return logging;
    }
    if (key === "Mining") {
      return mining;
    }
    if (key === "Tracking & Skinning") {
      return skinning;
    }
    if (key === "Smelting") {
      return smelting;
    }
    if (key === "Stone Cutting") {
      return stonecutting;
    }
    if (key === "Weapon Smithing") {
      return weaponsmithing;
    }
    if (key === "Weaving") {
      return weaving;
    }
    if (key === "Woodworking") {
      return woodworking;
    }
    if (key === "Arcana") {
      return arcana;
    }
  }

  ProduceTypeLists = [
    "Weapon Smithing",
    "Armoring",
    "Engineering",
    "Jewel Crafting",
    "Arcana",
    "Cooking",
    "Furnishing",
  ];
  ManufactureTypeLists = [
    "Smelting",
    "Stone Cutting",
    "Leather Working",
    "Weaving",
    "Woodworking",
  ];
  GatherTypeLists = [
    "Mining",
    "Tracking & Skinning",
    "Fishing",
    "Logging",
    "Harvesting",
  ];

  render() {
    return (
      <div className={styles["TradeSkillCard-container"]}>
        <TradeSkillDetails />
        <div>
          <span className={styles["title-label"]}>ProduceType :</span>
          <br />
          {this.ProduceTypeLists.map((i) => (
            <TradeSkillCard
              key={i}
              language={i}
              img={this.getIconImport(i)}
              type={i}
            />
          ))}
        </div>
        <div>
          <span className={styles["title-label"]}>ManufactureType :</span>
          <br />
          {this.ManufactureTypeLists.map((i) => (
            <TradeSkillCard
              key={i}
              language={i}
              img={this.getIconImport(i)}
              type={i}
            />
          ))}
        </div>
        <div>
          <span className={styles["title-label"]}>GatherType :</span>
          <br />
          {this.GatherTypeLists.map((i) => (
            <TradeSkillCard
              key={i}
              language={i}
              img={this.getIconImport(i)}
              type={i}
            />
          ))}
        </div>
      </div>
    );
  }
}
