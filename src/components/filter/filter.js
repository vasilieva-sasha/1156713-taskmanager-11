import {createFiltersTemplate} from "./components/filter";
import AbstractComponent from "../abstract-component";

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }
}
