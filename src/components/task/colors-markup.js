export const createColorsMarkup = (colors) => {
  return colors.map((color) => {
    return (
      `<input
        type="radio"
        id="color-${color}-4"
        class="card__color-input card__color-input--${color} visually-hidden"
        name="color"
        value="${color}"
      />
      <label
        for="color-${color}-4"
        class="card__color card__color--${color}"
        >${color}</label
      >`
    );
  }).join(`\n`);
};
