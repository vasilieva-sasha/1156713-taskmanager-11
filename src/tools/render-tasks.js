import {render, replace, remove} from "./utils/render";
import {onEscDown} from "./utils/utils";
import {TASK_COUNT, SHOWING_TASKS_COUNT_ON_START, Position} from "./consts";
import TaskEdit from "./../components/task/task-edit";
import Task from "./../components/task/task";
import {generateTasks} from "../mock/task";

const tasks = generateTasks(TASK_COUNT);

const renderTask = (taskListElement, task) => {

  const openTaskEdit = () => {
    replace(taskEditComponent, taskComponent);
  };

  const closeTaskEdit = () => {
    replace(taskComponent, taskEditComponent);
    document.removeEventListener(`keydown`, onEscDown);
  };

  const onDeleteTaskClick = () => {
    remove(taskEditComponent);
    document.removeEventListener(`keydown`, onEscDown);
  };

  const onEditButtonClick = () => {
    openTaskEdit();
    document.addEventListener(`keydown`, (evt) => {
      onEscDown(evt, closeTaskEdit);
    });
  };

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    closeTaskEdit();
  };

  const taskComponent = new Task(task);
  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);

  editButton.addEventListener(`click`, onEditButtonClick);

  const taskEditComponent = new TaskEdit(task);
  const editForm = taskEditComponent.getElement().querySelector(`form`);

  editForm.addEventListener(`submit`, onEditFormSubmit);

  const deleteButton = taskEditComponent.getElement().querySelector(`.card__delete`);
  deleteButton.addEventListener(`click`, onDeleteTaskClick);

  render(taskListElement, taskComponent, Position.BEFOREEND);
};


const renderTasks = (taskListElement) => {
  tasks.slice(0, SHOWING_TASKS_COUNT_ON_START)
  .forEach((task) => renderTask(taskListElement, task));
};

export {tasks, renderTask, renderTasks};
