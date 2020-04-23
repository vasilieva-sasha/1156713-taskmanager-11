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

  taskComponent.setEditButtonClickHandler(onEditButtonClick);

  const taskEditComponent = new TaskEdit(task);

  taskEditComponent.setSubmitHandler(onEditFormSubmit);

  taskEditComponent.setDeleteHandler(onDeleteTaskClick);

  render(taskListElement, taskComponent, Position.BEFOREEND);
};


const renderTasks = (taskListElement) => {
  tasks.slice(0, SHOWING_TASKS_COUNT_ON_START)
  .forEach((task) => renderTask(taskListElement, task));
};

export {tasks, renderTask, renderTasks};
