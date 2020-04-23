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

  setSubmitHandler(handler) {
    this.getElement().querySelector(`form`)
      .addEventListener(`submit`, handler);
  }

  setDeleteHandler(handler) {
    this.getElement().querySelector(`.card__delete`)
    .addEventListener(`click`, handler);
  }
}
