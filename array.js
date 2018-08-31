export const array = attr => {
  if (attr == null) return null;

  const str = attr
    .trim()
    .replace(/^\[?(.*?)\]?$/, "$1")
    .split(",")
    .map(x => x.trim());

  return str || null;
};

array.stringify = a => (a && a.length > 0 ? a.join(",") : null);

export default array;
