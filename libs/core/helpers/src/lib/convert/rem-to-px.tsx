export const remToPx = (rem: string): number => {
  const remNumber = parseInt(rem);
  const defaultFontSize = getDefaultFontSize();

  return defaultFontSize && !isNaN(remNumber) && !isNaN(defaultFontSize)
    ? remNumber * defaultFontSize
    : 0;
};

const getDefaultFontSize = () => {
  const element = document.createElement('div');
  element.style.width = '1rem';
  element.style.display = 'none';
  document.body.append(element);

  const widthMatch = window
    .getComputedStyle(element)
    .getPropertyValue('width')
    .match(/\d+/);

  element.remove();

  if (!widthMatch || widthMatch.length < 1) {
    return null;
  }

  const result = Number(widthMatch[0]);
  return !isNaN(result) ? result : null;
};
