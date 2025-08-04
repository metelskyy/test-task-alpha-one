export const isEmptyPrice = (value: string | number) =>
  !value || +value <= 0 || !isFinite(+value) || isNaN(+value)
