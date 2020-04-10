import {DAYS, COLORS} from "../tools/consts.js";
import {getRandomElement, getBoolean} from "../tools/utils.js";

const descriptions = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];

const getRepeatingDays = () => {
  const getDay = DAYS.map((day) => ({[day]: getBoolean()}));
  return Object.assign({}, ...getDay);
};

const getRandomDate = () => {
  const today = new Date();
  let newDate = today;
  newDate.setDate(today.getDate() + Math.floor(Math.random() * 14 - 7));
  return new Date(newDate);
};

export const generateTask = () => {
  return {
    description: getRandomElement(descriptions),
    dueDate: getBoolean() ? getRandomDate() : null,
    repeatingDays: getRepeatingDays(),
    color: getRandomElement(COLORS),
    isArchive: getBoolean(),
    isFavorite: getBoolean(),
  };
};

export const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};
