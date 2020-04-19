import {createBoardContainerTemplate} from "./components/board-container";
import {createElement} from "../../tools/utils";

export default class Board {
  constuctor() {
    this._element = null;
  }

  getTemplate() {
    return createBoardContainerTemplate();
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
