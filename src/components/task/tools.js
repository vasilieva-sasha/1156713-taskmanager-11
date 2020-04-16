import {formatTime} from "./../../tools/utils";
import {DAYS, MONTH_NAMES} from "./../../tools/consts";
import {createRepeatingDaysMarkup} from "./repeating-days-markup";

const getExpiredclass = (dueDate) => dueDate instanceof Date && dueDate < Date.now();
const isDateShowing = (dueDate) => !!dueDate;

const showDate = (dueDate) => isDateShowing(dueDate) ? `yes` : `no`;

const getDate = (dueDate) => isDateShowing(dueDate) ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : ``;
const getTime = (dueDate) => isDateShowing(dueDate) ? formatTime(dueDate) : ``;

const getDeadLineMarkup = (dueDate) => {
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

const showRepeat = (repeatingDays) => isRepeatingTask(repeatingDays) ? `yes` : `no`;
const getRepeatClass = (repeatingDays) => {
  return isRepeatingTask(repeatingDays) ? `card--repeat` : ``;
};

const getDeadlineClass = (dueDate) => getExpiredclass(dueDate) ? `card--deadline` : ``;

const getRepeatingDaysMarkup = (repeatingDays) => {
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

export {getExpiredclass, showDate, getDate, getTime, getDeadLineMarkup, showRepeat, getRepeatClass, getDeadlineClass, getRepeatingDaysMarkup};
