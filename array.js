export const array = attr =>
  attr.trim()
    // .replace(/^\[?(.*?)\]?$/, '$1')
    .split(',')
    .map(x => x.trim());

array.stringify = a => (a.length ? a.join(',') : null);
