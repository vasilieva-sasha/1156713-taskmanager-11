import {createMenuTemplate} from "./components/site-menu.js";
import {createFiltersTemplate} from "./components/filter.js";
import {renderTasks} from "./tools/render-tasks.js";
import {createBoardContainerTemplate} from "./components/board-container.js";
import {filters} from "./mock/filter.js";

import {render} from "./tools/utils.js";
import {BEFOREEND} from "./tools/consts.js";
import {onLoadMoreButtonClick} from "./tools/load-more-button.js";

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
