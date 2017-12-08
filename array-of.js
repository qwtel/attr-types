import { array } from './array';

export const arrayOf = (type) => {
  const f = attr => array(attr).map(type);
  f.stringify = a => array.stringify(a.map(type.stringify));
  return f;
};
