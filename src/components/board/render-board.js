import {render} from "../../tools/utils";
import {Position, TASK_COUNT, SHOWING_TASKS_COUNT_ON_START} from "../../tools/consts";
import Sorting from "../sorting/sort";
import Tasks from "./board-tasks";
import {renderTasks} from "../../tools/render-tasks";
import {onLoadMoreButtonClick} from "../../tools/load-more-button";
import LoadMoreButton from "../button/load-more-button";
import {showMessage} from "../message/components/no-tasks";

const renderBoard = (boardComponent, tasks) => {
  showMessage(tasks, boardComponent);

  render(boardComponent.getElement(), new Sorting().getElement(), Position.BEFOREEND);
  render(boardComponent.getElement(), new Tasks().getElement(), Position.BEFOREEND);

  const taskListElement = boardComponent.getElement().querySelector(`.board__tasks`);

  renderTasks(taskListElement);

  const loadMoreButton = new LoadMoreButton();
  if (TASK_COUNT > SHOWING_TASKS_COUNT_ON_START) {
    render(boardComponent.getElement(), loadMoreButton.getElement(), Position.BEFOREEND);
    loadMoreButton.getElement().addEventListener(`click`, () => {
      onLoadMoreButtonClick(taskListElement, tasks, loadMoreButton);
    });
  }
};

export {renderBoard};
