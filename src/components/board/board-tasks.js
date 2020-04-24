import {createElement} from "../../tools/utils/utils";
import {createBoardTasksTemplate} from "./components/board-tasks";

export default class Tasks {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createBoardTasksTemplate();
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
