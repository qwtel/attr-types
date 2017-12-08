export const bool = (attr) => {
  if (attr === true || attr === 'true') return true;
  else if (attr === false || attr === 'false') return false;
  return attr != null;
};

bool.stringify = b => `${!!b}`;
