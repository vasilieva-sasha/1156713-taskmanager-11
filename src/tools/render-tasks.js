import {render} from "./utils";
import {TASK_COUNT, SHOWING_TASKS_COUNT_ON_START, Position} from "./consts";
import TaskEdit from "./../components/task/task-edit";
import Task from "./../components/task/task";
import {generateTasks} from "../mock/task";

const tasks = generateTasks(TASK_COUNT);

const renderTask = (taskListElement, task) => {
  const onEditButtonClick = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };


  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  };

  const taskComponent = new Task(task);
  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);

  editButton.addEventListener(`click`, onEditButtonClick);

  const taskEditComponent = new TaskEdit(task);
  const editForm = taskEditComponent.getElement().querySelector(`form`);

  editForm.addEventListener(`submit`, onEditFormSubmit);

  render(taskListElement, taskComponent.getElement(), Position.BEFOREEND);
};


const renderTasks = (taskListElement) => {
  tasks.slice(0, SHOWING_TASKS_COUNT_ON_START)
  .forEach((task) => renderTask(taskListElement, task));
};

export {tasks, renderTask, renderTasks};
