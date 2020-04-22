import {createTaskTemplate} from "./components/task";
import AbstractComponent from "../abstract-component";

export default class Task extends AbstractComponent {
  constructor(task) {
    super();
    this._task = task;
  }

  getTemplate() {
    return createTaskTemplate(this._task);
  }
}
