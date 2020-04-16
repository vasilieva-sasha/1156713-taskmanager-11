import {DAYS, COLORS} from "../tools/consts";
import {getRandomElement, getBoolean} from "../tools/utils";

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

const generateTask = () => ({
  description: getRandomElement(descriptions),
  dueDate: getBoolean() ? getRandomDate() : null,
  repeatingDays: getRepeatingDays(),
  color: getRandomElement(COLORS),
  isArchive: getBoolean(),
  isFavorite: getBoolean(),
});

const generateTasks = (count) => new Array(count).fill(``).map(generateTask);

export {generateTask, generateTasks};
