export const number = attr => {
  if (attr == null) return null;
  return Number(attr);
};

number.stringify = n => {
  if (n == null) return null;
  return `${n}`;
};

export default number;
