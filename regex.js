export const regex = attr => {
  if (attr == null) return null;
  const attr2 = (attr.trim && attr.trim()) || attr;
  const match = attr2.match(/^\/?(.*?)(\/([gimy]*))?$/);
  return new RegExp(match[1], match[3]);
};

regex.stringify = r => (r && r.toString()) || null;

export default regex;
