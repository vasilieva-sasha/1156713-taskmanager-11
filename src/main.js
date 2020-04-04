import {createMenuTemplate} from "./components/site-menu.js";
import {createFiltersTemplate} from "./components/filter.js";
import {renderTasks} from "./components/tasks.js";
import {createBoardContainerTemplate} from "./components/board-container.js";
import {render} from "./tools/utils.js";
import {BEFOREEND} from "./tools/consts.js";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const init = () => {
  render(siteHeaderElement, createMenuTemplate(), BEFOREEND);
  render(siteMainElement, createFiltersTemplate(), BEFOREEND);
  render(siteMainElement, createBoardContainerTemplate(), BEFOREEND);
  renderTasks();
};

init();
