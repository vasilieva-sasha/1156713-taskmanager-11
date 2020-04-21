import {Position} from "./consts";

export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

export const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getBoolean = () => Math.random() > 0.5;

export const getCheckedClass = (isChecked) => isChecked ? `checked` : ``;

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const onEscDown = (evt, action) => {
  const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
  if (isEscKey) {
    action();
    document.removeEventListener(`keydown`, onEscDown);
  }
};
