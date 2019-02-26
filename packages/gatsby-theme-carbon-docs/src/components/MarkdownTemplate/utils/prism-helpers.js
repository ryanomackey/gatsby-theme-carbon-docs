export const getTitle = (className = '') => {
  const hasTitle = !!className.split(':')[1];

  if (hasTitle) {
    return className.split(':')[1].split('=')[1];
  }

  return null;
};

export const getHighlights = (className = '') => {
  const regex = /{\d+(-\d+|-\d+,\d+-\d+)?}/;
  const hasHighlights = !!className.match(regex);

  if (hasHighlights) {
    const highlights = className
      .match(regex)[0]
      .slice(1, -1) // to trim the brackets
      .split(',');

    return highlights;
  }

  return null;
};

const isRange = number => !!number.match(/-/);

export const getFlatHighlights = highlights =>
  highlights &&
  highlights
    .reduce((allHighlights, highlight) => {
      if (!isRange(highlight)) {
        return [...allHighlights, Number(highlight)];
      }

      const minMax = highlight.split('-');
      const min = Number(minMax[0]);
      const max = Number(minMax[1]);
      const diff = max - min;
      const range = [min];
      let count = 0;

      while (count < diff) {
        range.push(min + count + 1);
        count += 1;
      }

      return [...allHighlights, ...range];
    }, [])
    .sort((a, b) => a - b);

export const isHighlighted = (i, flatHighlights) =>
  flatHighlights && flatHighlights.includes(i)
    ? { className: 'gatsby-highlight-code-line' }
    : null;

export const getLanguage = (className = '') => {
  const regex = /language-\w+/;
  const hasLanguage = !!className.match(regex);

  if (hasLanguage) {
    return className.match(regex)[0].split('-')[1];
  }

  return null;
};
