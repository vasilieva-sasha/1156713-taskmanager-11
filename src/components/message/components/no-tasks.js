import NoTasksMessage from "../no-tasks";
import {render} from "../../../tools/utils/render";
import {TASK_COUNT, Position} from "../../../tools/consts";

const createNoTasksMarkup = () => {
  return (
    `<section class="board container">
      <p class="board__no-tasks">
        Click «ADD NEW TASK» in menu to create your first task
      </p>
    </section>`
  );
};

const showMessage = (tasks, boardComponent) => {
  const allTasksArchived = tasks.every((task) => task.isArchive);

  if (allTasksArchived || TASK_COUNT === 0) {
    render(boardComponent.getElement(), new NoTasksMessage().getElement(), Position.BEFOREEND);
    return;
  }
};

export {createNoTasksMarkup, showMessage};
