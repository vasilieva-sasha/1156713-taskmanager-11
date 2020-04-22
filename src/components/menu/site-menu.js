import {createMenuTemplate} from "./components/site-menu";
import AbstractComponent from "../abstract-component";

export default class SiteMenu extends AbstractComponent {
  getTemplate() {
    return createMenuTemplate();
  }
}
