import {createSortingTemplate} from "./sorting.js";
import {createTaskEditTemplate} from "./task-edit.js";
import {createLoadButtonTemplate} from "./load-button.js";

export const createBoardContainerTemplate = () => {
  return (
    `<section class="board container">
      ${createSortingTemplate()}
      <div class="board__tasks">
      ${createTaskEditTemplate()}
      </div>
      ${createLoadButtonTemplate()}
    </section>`
  );
};
