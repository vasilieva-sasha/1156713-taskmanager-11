import {SHOWING_TASKS_COUNT_ON_START, SHOWING_TASKS_COUNT_BY_BUTTON, BEFOREEND} from "./consts.js";
import {tasks} from "./render-tasks.js";
import {render} from "./utils.js";
import {createTaskTemplate} from "../components/task/task.js";

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

export const onLoadMoreButtonClick = () => {
  const taskListElement = document.querySelector(`.board__tasks`);
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, createTaskTemplate(task), BEFOREEND));

  if (showingTasksCount >= tasks.length) {
    document.querySelector(`.load-more`).remove();
  }
};
