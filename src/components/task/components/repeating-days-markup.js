import {getCheckedClass} from "./../../../tools/utils";

const createDaysTemplate = (day, index, isChecked) => {
  return (
    `<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${day}-${index}"
      name="repeat"
      value="${day}"
      ${getCheckedClass(isChecked)}
      />
    <label class="card__repeat-day" for="repeat-${day}-${index}"
      >${day}</label>`
  );
};

const createCheckedDaysMarkup = (repeatingDays, day, index) => {
  const isChecked = repeatingDays[day];
  return createDaysTemplate(day, index, isChecked);
};

const createRepeatingDaysMarkup = (days, repeatingDays) => {
  return days.map((day, index) => createCheckedDaysMarkup(repeatingDays, day, index)).join(`\n`);
};

export {createRepeatingDaysMarkup};
