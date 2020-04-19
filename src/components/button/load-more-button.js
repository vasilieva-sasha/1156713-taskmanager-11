import {createLoadButtonTemplate} from "./components/load-button";
import {createElement} from "../../tools/utils";

export default class LoadMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createLoadButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
