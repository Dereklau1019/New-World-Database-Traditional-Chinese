// @material-ui/icons
import Add from "@material-ui/icons/Add";
import Person from "@material-ui/icons/Person";
// View pages
import WeaponsView from "views/Weapons/Weapons";
import GemsView from "views/Gems/Gems";
import MostersView from "views/Monsters/Monsters";

const Routes = [
  {
    path: "/Weapons",
    name: "Weapons",
    icon: Add,
    component: WeaponsView,
  },
  {
    path: "/Gems",
    name: "Gems",
    icon: Person,
    component: GemsView,
  },
  {
    path: "/Monsters",
    name: "Monsters",
    icon: Person,
    component: MostersView,
  },
  {
    path: "/upgrade-to-pro",
    name: "Test Nav Footer",
    icon: Person,
    component: GemsView,
  },
];

export default Routes;
