import {render} from "./utils.js";
import {TASK_COUNT, BEFOREEND} from "./consts.js";
import {createTaskTemplate} from "./../components/task.js";

export const renderTasks = () => {
  const taskListElement = document.querySelector(`.board__tasks`);
  for (let i = 0; i < TASK_COUNT; i++) {
    render(taskListElement, createTaskTemplate(), BEFOREEND);
  }
};
