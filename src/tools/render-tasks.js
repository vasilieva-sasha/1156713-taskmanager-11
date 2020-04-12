import {render} from "./utils.js";
import {TASK_COUNT, SHOWING_TASKS_COUNT_ON_START, BEFOREEND} from "./consts.js";
import {createTaskTemplate} from "./../components/task/task.js";
import {generateTasks} from "../mock/task.js";

export const tasks = generateTasks(TASK_COUNT);

export const renderTasks = () => {
  const taskListElement = document.querySelector(`.board__tasks`);
  tasks.slice(1, SHOWING_TASKS_COUNT_ON_START)
  .forEach((task) => render(taskListElement, createTaskTemplate(task), BEFOREEND));
};
