import * as React from "react";
import LifeSkillTable from "components/ForNewWorld/LifeSkillTable/LifeSkillTable";

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
  skillTypeLists = [
    "Weaponsmithing",
    "Armoring",
    "Engineering",
    "Jewelcrafting",
    "Arcana",
    "Cooking",
    "Furnishing",
  ];
  skillTypeLists2 = [
    "Smelting",
    "Stonecutting",
    "Leatherworking",
    "Weaving",
    "Woodworking",
  ];
  skillTypeLists3 = [
    "Mining",
    "Tracking & Skinning",
    "Fishing",
    "Logging",
    "Harvesting",
  ];

  render() {
    return <LifeSkillTable language="A" items="B" type="C" />;
  }
}
