// @material-ui/icons
import Add from "@material-ui/icons/Add";
import Person from "@material-ui/icons/Person";
// View pages
import WeaponsView from "views/Weapons/Weapons";
import GemsView from "views/Gems/Gems";
import MostersView from "views/Monsters/Monsters";
import LifeSkills from "./views/LifeSkills/LifeSkillsView";

const Routes = [
  {
    path: "/Weapons",
    name: "Weapons",
    nameTC: "武器",
    icon: Add,
    component: WeaponsView,
  },
  {
    path: "/Gems",
    name: "Gems",
    nameTC: "寶石",
    icon: Person,
    component: GemsView,
  },
  {
    path: "/Monsters",
    name: "Monsters",
    nameTC: "怪物",
    icon: Person,
    component: MostersView,
  },
  {
    path: "/LifeSkills",
    name: "Life Skills",
    nameTC: "生活",
    icon: Person,
    component: LifeSkills,
  },
  {
    path: "/Contact-Us",
    name: "Contact Us",
    nameTC: "聯絡我們",
    icon: Person,
    component: GemsView,
  },
];

export default Routes;
