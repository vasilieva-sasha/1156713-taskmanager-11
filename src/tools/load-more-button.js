import {SHOWING_TASKS_COUNT_ON_START, SHOWING_TASKS_COUNT_BY_BUTTON} from "./consts";
import {renderTask} from "./render-tasks";

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

const onLoadMoreButtonClick = (taskListElement, tasks, loadMoreButton) => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderTask(taskListElement, task));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.getElement().remove();
    loadMoreButton.removeElement();
  }
};

export {onLoadMoreButtonClick};
