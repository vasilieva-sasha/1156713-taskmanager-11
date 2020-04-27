import {createSortingTemplate} from "./components/sort";
import AbstractComponent from "../abstract-component";
import {SortType} from "../../tools/consts";

export default class Sorting extends AbstractComponent {
  constructor() {
    super();
    this._currentSortType = SortType.DEFAULT;
  }
  getTemplate() {
    return createSortingTemplate();
  }

  getSortType() {
    return this._currentSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      handler(this._currentSortType);
    });
  }
}
