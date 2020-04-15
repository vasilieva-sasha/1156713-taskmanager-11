import {SHOWING_TASKS_COUNT_ON_START, SHOWING_TASKS_COUNT_BY_BUTTON, BEFOREEND} from "./consts";
import {tasks} from "./render-tasks";
import {render} from "./utils";
import {createTaskTemplate} from "../components/task/task";

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

const onLoadMoreButtonClick = () => {
  const taskListElement = document.querySelector(`.board__tasks`);
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, createTaskTemplate(task), BEFOREEND));

  if (showingTasksCount >= tasks.length) {
    document.querySelector(`.load-more`).remove();
  }
};

export {onLoadMoreButtonClick};
