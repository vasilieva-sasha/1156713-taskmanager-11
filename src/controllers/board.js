import Sorting from "../components/sorting/sort";
import Tasks from "../components/board/board-tasks";
import LoadMoreButton from "../components/button/load-more-button";
import NoTasksMessage from "../components/message/no-tasks";
import {render, remove} from "../tools/utils/render";
import {renderTasks} from "../tools/render-tasks";
import {Position, TASK_COUNT, SHOWING_TASKS_COUNT_ON_START, SHOWING_TASKS_COUNT_BY_BUTTON, SortType} from "../tools/consts";
import {getSortedTasks} from "../components/sorting/components/sort";

export default class BoardController {
  constructor(container) {
    this._container = container;

    this._noTasksComponent = new NoTasksMessage();
    this._sortComponent = new Sorting();
    this._tasksComponent = new Tasks();
    this._loadButtonComponent = new LoadMoreButton();
  }

  render(tasks) {
    const container = this._container.getElement();
    let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

    const onLoadMoreButtonClick = (taskListElement) => {
      const prevTasksCount = showingTasksCount;
      showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
      const sortedTasks = getSortedTasks[this._sortComponent.getSortType()](tasks, prevTasksCount, showingTasksCount);

      renderTasks(taskListElement, sortedTasks);

      if (showingTasksCount >= tasks.length) {
        remove(this._loadButtonComponent);
      }
    };

    const renderLoadMoreButton = () => {
      remove(this._loadButtonComponent);

      if (tasks.length > SHOWING_TASKS_COUNT_ON_START) {
        render(container, this._loadButtonComponent, Position.BEFOREEND);
        this._loadButtonComponent.setClickHandler(() => {
          onLoadMoreButtonClick(taskListElement);
        });
      }
    };

    const allTasksArchived = tasks.every((task) => task.isArchive);

    if (allTasksArchived || TASK_COUNT === 0) {
      render(container, this._noTasksComponent, Position.BEFOREEND);
      return;
    }

    render(container, this._sortComponent, Position.BEFOREEND);
    render(container, this._tasksComponent, Position.BEFOREEND);

    const taskListElement = this._tasksComponent.getElement();

    renderTasks(taskListElement, tasks.slice(0, showingTasksCount));

    renderLoadMoreButton();

    this._sortComponent.setSortTypeChangeHandler((sortType) => {
      showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

      const sortedTasks = getSortedTasks[sortType](tasks, 0, showingTasksCount);

      taskListElement.innerHTML = ``;
      renderTasks(taskListElement, sortedTasks);
      renderLoadMoreButton();
    });
  }
}
