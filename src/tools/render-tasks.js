import {render} from "./utils";
import {TASK_COUNT, SHOWING_TASKS_COUNT_ON_START, BEFOREEND} from "./consts";
import {createTaskTemplate} from "./../components/task/task";
import {generateTasks} from "../mock/task";

const tasks = generateTasks(TASK_COUNT);

const renderTasks = () => {
  const taskListElement = document.querySelector(`.board__tasks`);
  tasks.slice(1, SHOWING_TASKS_COUNT_ON_START)
  .forEach((task) => render(taskListElement, createTaskTemplate(task), BEFOREEND));
};

export {tasks, renderTasks};
