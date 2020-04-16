export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
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
