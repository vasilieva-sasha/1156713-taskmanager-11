import {SortType} from "../../../tools/consts";

const createSortingTemplate = () => {
  return (
    `<div class="board__filter-list">
      <a href="#" class="board__filter" data-sort-type="${SortType.DEFAULT}">SORT BY DEFAULT</a>
      <a href="#" class="board__filter" data-sort-type="${SortType.DATE_UP}">SORT BY DATE up</a>
      <a href="#" class="board__filter" data-sort-type="${SortType.DATE_DOWN}">SORT BY DATE down</a>
    </div>`
  );
};

let sortedTasks = [];
const getSortedTasks = {
  [SortType.DATE_UP]: (tasks, from, to) => {
    sortedTasks = tasks.slice().sort((newerDate, olderDate) => newerDate.dueDate - olderDate.dueDate);
    return sortedTasks.slice(from, to);
  },
  [SortType.DATE_DOWN]: (tasks, from, to) => {
    sortedTasks = tasks.slice().sort((newerDate, olderDate) => olderDate.dueDate - newerDate.dueDate);
    return sortedTasks.slice(from, to);
  },
  [SortType.DEFAULT]: (tasks, from, to) => {
    sortedTasks = tasks.slice();
    return sortedTasks.slice(from, to);
  },
};

export {createSortingTemplate, getSortedTasks};
