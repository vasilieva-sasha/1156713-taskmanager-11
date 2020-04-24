import {createNoTasksMarkup} from "./components/no-tasks";
import AbstractComponent from "../abstract-component";

export default class NoTasksMessage extends AbstractComponent {
  getTemplate() {
    return createNoTasksMarkup();
  }
}
