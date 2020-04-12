import {formatTime} from "./../../tools/utils.js";
import {DAYS, MONTH_NAMES} from "./../../tools/consts.js";
import {createRepeatingDaysMarkup} from "./repeating-days-markup.js";

export const getExpiredclass = (dueDate) => dueDate instanceof Date && dueDate < Date.now();
const isDateShowing = (dueDate) => !!dueDate;

export const showDate = (dueDate) => isDateShowing(dueDate) ? `yes` : `no`;

export const getDate = (dueDate) => isDateShowing(dueDate) ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : ``;
export const getTime = (dueDate) => isDateShowing(dueDate) ? formatTime(dueDate) : ``;

export const getDeadLineMarkup = (dueDate) => {
  return (
    isDateShowing(dueDate) ?
      `<fieldset class="card__date-deadline">
        <label class="card__input-deadline-wrap">
          <input
            class="card__date"
            type="text"
            placeholder=""
            name="date"
            value="${getDate((dueDate))} ${getTime((dueDate))}"
          />
        </label>
      </fieldset>`
      : ``
  );
};

const isRepeatingTask = (repeatingDays) => Object.values(repeatingDays).some(Boolean);

export const showRepeat = (repeatingDays) => isRepeatingTask(repeatingDays) ? `yes` : `no`;
export const getRepeatClass = (repeatingDays) => {
  return isRepeatingTask(repeatingDays) ? `card--repeat` : ``;
};

export const getDeadlineClass = (dueDate) => getExpiredclass(dueDate) ? `card--deadline` : ``;

export const getRepeatingDaysMarkup = (repeatingDays) => {
  const repeatingDaysMarkup = createRepeatingDaysMarkup(DAYS, repeatingDays);
  return (
    isRepeatingTask(repeatingDays) ?
      `<fieldset class="card__repeat-days">
        <div class="card__repeat-days-inner">
        ${repeatingDaysMarkup}
        </div>
      </fieldset>`
      : ``
  );
};
