export const bool = (attr) => {
  if (attr == null) return null;
  const attr2 = (attr.trim && attr.trim()) || attr;
  return !(
    attr2 === 'false' ||
    attr2 === 'null' ||
    attr2 === 'undefined' ||
    attr2 === '0' ||
    attr2 === false
  );
};

bool.stringify = b => `${!!b}`;

export default bool;
