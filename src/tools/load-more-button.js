import {SHOWING_TASKS_COUNT_ON_START, SHOWING_TASKS_COUNT_BY_BUTTON} from "./consts";
import {renderTask} from "./render-tasks";
import {remove} from "./utils/render";

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

const onLoadMoreButtonClick = (taskListElement, tasks, loadMoreButton) => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderTask(taskListElement, task));

  if (showingTasksCount >= tasks.length) {
    remove(loadMoreButton);
  }
};

export {onLoadMoreButtonClick};
