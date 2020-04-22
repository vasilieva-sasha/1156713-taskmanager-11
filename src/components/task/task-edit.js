import AbstractComponent from "../abstract-component";
import {createTaskEditTemplate} from "./components/task-edit";

export default class TaskEdit extends AbstractComponent {
  constructor(task) {
    super();
    this._task = task;
  }

  getTemplate() {
    return createTaskEditTemplate(this._task);
  }
}
