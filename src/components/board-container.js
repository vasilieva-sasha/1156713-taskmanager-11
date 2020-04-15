import {createSortingTemplate} from "./sorting";
import {createTaskEditTemplate} from "./task/task-edit";
import {createLoadButtonTemplate} from "./load-button";
import {generateTasks} from "../mock/task";
import {TASK_COUNT} from "../tools/consts";

const tasks = generateTasks(TASK_COUNT);

const createBoardContainerTemplate = () => {
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

export {tasks, createBoardContainerTemplate};
