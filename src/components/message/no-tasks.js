import {createNoTasksMarkup} from "./components/no-tasks";
import {createElement} from "../../tools/utils";

export default class NoTasksMessage {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoTasksMarkup();
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
