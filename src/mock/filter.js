import {TASK_COUNT} from "../tools/consts";
import {tasks} from "../components/board/components/board-container";

const getOverdueCount = () => {
  return tasks.filter((task) => task.dueDate < new Date())
  .length;
};

const getTodayCount = () => {
  return tasks.filter((task) => task.dueDate === new Date())
  .length;
};

const getFavoriteCount = () => {
  return tasks.filter((task) => task.isFavorite)
  .length;
};

const getArchiveCount = () => {
  return tasks.filter((task) => task.isArchive)
  .length;
};

const filters = [
  {
    name: `all`,
    count: TASK_COUNT,
  }, {
    name: `overdue`,
    count: getOverdueCount(),
  }, {
    name: `today`,
    count: getTodayCount(),
  }, {
    name: `favorite`,
    count: getFavoriteCount(),
  }, {
    name: `repeating`,
    count: Math.floor(Math.random() * TASK_COUNT),
  }, {
    name: `archive`,
    count: getArchiveCount(),
  },
];

export {filters};
