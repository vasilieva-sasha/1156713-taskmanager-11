import {createBoardContainerTemplate} from "./components/board-container";
import AbstractComponent from "../abstract-component";


export default class Board extends AbstractComponent {
  getTemplate() {
    return createBoardContainerTemplate();
  }
}
