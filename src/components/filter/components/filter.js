import {getCheckedClass} from "../../../tools/utils";

const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;
  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${getCheckedClass(isChecked)}
    />
    <label for="filter__${name}" class="filter__label">
    ${name} <span class="filter__${name}-count">${count}</span></label
    >`
  );
};

const createFiltersTemplate = (filters) => {
  const filtersMurkup = filters.map((filter, i) => createFilterMarkup(filter, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
        ${filtersMurkup}
      </section>`
  );
};

export {createFiltersTemplate};
