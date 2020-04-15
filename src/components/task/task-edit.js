import {COLORS} from "../../tools/consts";
import {getDeadlineClass, showDate, getDeadLineMarkup, showRepeat, getRepeatClass, getRepeatingDaysMarkup} from "../task/tools";
import {createColorsMarkup} from "./colors-markup";


const createTaskEditTemplate = (task) => {
  const {description, dueDate, color, repeatingDays} = task;
  const colorsMarkup = createColorsMarkup(COLORS);

  return (
    `<article class="card card--edit card--${color} ${getRepeatClass(repeatingDays)} ${getDeadlineClass(dueDate)}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${description}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">${showDate(dueDate)}</span>
                </button>

                ${getDeadLineMarkup(dueDate)}

                <button class="card__repeat-toggle" type="button">
                  repeat:repeat:
                  <span class="card__repeat-status">${showRepeat(repeatingDays)}</span>
                </button>

                ${getRepeatingDaysMarkup(repeatingDays)}

              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
              ${colorsMarkup}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
};

export {createTaskEditTemplate};
