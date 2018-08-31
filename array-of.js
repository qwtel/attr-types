import { array } from "./array";

export const arrayOf = type => {
  const f = attr => {
    if (attr == null) return null;
    const a = array(attr).map(type);
    if (a.reduce((r, x) => r && x !== null, true)) {
      return a;
    }
    return null;
  };

  f.stringify = a => {
    const a2 = a && a.map && a.map(type.stringify);
    if (a2 && a2.reduce((r, x) => r && x !== null, true)) {
      return array.stringify(a2);
    }
    return null;
  };

  return f;
};

export default arrayOf;
