import SiteMenu from "./components/menu/site-menu";
import Board from "./components/board/board";
import Filter from "./components/filter/filter";
import {filters} from "./mock/filter";
import {render} from "./tools/utils";
import {TASK_COUNT, Position} from "./tools/consts";
import {renderBoard} from "./components/board/render-board";
import {generateTasks} from "./mock/task";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const tasks = generateTasks(TASK_COUNT);

const init = () => {
  render(siteHeaderElement, new SiteMenu().getElement(), Position.BEFOREEND);
  render(siteMainElement, new Filter(filters).getElement(), Position.BEFOREEND);

  const boardComponent = new Board();

  render(siteMainElement, boardComponent.getElement(), Position.BEFOREEND);
  renderBoard(boardComponent, tasks);
};

init();
