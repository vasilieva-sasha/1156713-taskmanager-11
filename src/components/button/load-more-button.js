import {createLoadButtonTemplate} from "./components/load-button";
import AbstractComponent from "../abstract-component";

export default class LoadMoreButton extends AbstractComponent {
  getTemplate() {
    return createLoadButtonTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
