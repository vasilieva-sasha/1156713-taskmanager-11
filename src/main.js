import {createMenuTemplate} from "./components/site-menu";
import {createFiltersTemplate} from "./components/filter";
import {renderTasks} from "./tools/render-tasks";
import {createBoardContainerTemplate} from "./components/board-container";
import {filters} from "./mock/filter";
import {render} from "./tools/utils";
import {BEFOREEND} from "./tools/consts";
import {onLoadMoreButtonClick} from "./tools/load-more-button";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const init = () => {
  render(siteHeaderElement, createMenuTemplate(), BEFOREEND);
  render(siteMainElement, createFiltersTemplate(filters), BEFOREEND);
  render(siteMainElement, createBoardContainerTemplate(), BEFOREEND);
  renderTasks();
  const loadMoreButton = document.querySelector(`.load-more`);
  loadMoreButton.addEventListener(`click`, onLoadMoreButtonClick);
};

init();
