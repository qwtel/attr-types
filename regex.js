export const regex = (attr) => {
  const match = attr.match(/^\/?(.*?)(\/([gimy]*))?$/);
  return new RegExp(match[1], match[3]);
};

regex.stringify = r => r.toString();
