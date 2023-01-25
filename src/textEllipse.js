export const textEllipse = (text, count) => {
  if (text.length >= count) return text.slice(0, count);
  else return `${text.slice(0, count)}...`;
};
