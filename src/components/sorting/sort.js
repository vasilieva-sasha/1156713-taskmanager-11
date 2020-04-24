import {createSortingTemplate} from "./components/sort";
import AbstractComponent from "../abstract-component";

export default class Sorting extends AbstractComponent {
  getTemplate() {
    return createSortingTemplate();
  }
}
