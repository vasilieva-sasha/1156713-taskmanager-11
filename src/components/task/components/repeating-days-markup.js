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

const createRepeatingDaysMarkup = (days, repeatingDays) => {
  return days
  .map((day, index) => {
    const isChecked = repeatingDays[day];
    return createDaysTemplate(day, index, isChecked);
  })
  .join(`\n`);
};

export {createRepeatingDaysMarkup};
