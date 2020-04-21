import {render, onEscDown} from "./utils";
import {TASK_COUNT, SHOWING_TASKS_COUNT_ON_START, Position} from "./consts";
import TaskEdit from "./../components/task/task-edit";
import Task from "./../components/task/task";
import {generateTasks} from "../mock/task";

const tasks = generateTasks(TASK_COUNT);

const renderTask = (taskListElement, task) => {

  const openTaskEdit = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const closeTaskEdit = () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
    document.removeEventListener(`keydown`, onEscDown);
  };

  const onDeleteTaskClick = () => {
    taskEditComponent.getElement().remove();
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

  render(taskListElement, taskComponent.getElement(), Position.BEFOREEND);
};


const renderTasks = (taskListElement) => {
  tasks.slice(0, SHOWING_TASKS_COUNT_ON_START)
  .forEach((task) => renderTask(taskListElement, task));
};

export {tasks, renderTask, renderTasks};
