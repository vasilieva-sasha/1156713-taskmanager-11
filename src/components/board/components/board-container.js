import {generateTasks} from "../../../mock/task";
import {TASK_COUNT} from "../../../tools/consts";

const tasks = generateTasks(TASK_COUNT);

const createBoardContainerTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

export {tasks, createBoardContainerTemplate};
