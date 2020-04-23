import SiteMenu from "./components/menu/site-menu";
import Board from "./components/board/board";
import Filter from "./components/filter/filter";
import {filters} from "./mock/filter";
import {render} from "./tools/utils/render";
import {TASK_COUNT, Position} from "./tools/consts";
import {generateTasks} from "./mock/task";
import BoardController from "./controllers/board";

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const tasks = generateTasks(TASK_COUNT);

const init = () => {
  render(siteHeaderElement, new SiteMenu(), Position.BEFOREEND);
  render(siteMainElement, new Filter(filters), Position.BEFOREEND);

  const boardComponent = new Board();
  const boardController = new BoardController(boardComponent);

  render(siteMainElement, boardComponent, Position.BEFOREEND);
  boardController.render(tasks);
};

init();
