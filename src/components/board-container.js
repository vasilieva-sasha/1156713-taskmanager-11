import {createSortingTemplate} from "./sorting.js";
import {createTaskEditTemplate} from "./task/task-edit.js";
import {createLoadButtonTemplate} from "./load-button.js";
import {generateTasks} from "../mock/task.js";
import {TASK_COUNT} from "../tools/consts.js";

export const tasks = generateTasks(TASK_COUNT);

export const createBoardContainerTemplate = () => {
  return (
    `<section class="board container">
      ${createSortingTemplate()}
      <div class="board__tasks">
      ${createTaskEditTemplate(tasks[0])}
      </div>
      ${createLoadButtonTemplate()}
    </section>`
  );
};
