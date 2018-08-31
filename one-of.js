export const oneOf = alts => {
  const f = attr => {
    if (attr == null) return null;

    const i = alts.indexOf(attr);
    if (process.env.DEBUG && i === -1) {
      console.warn(`'${attr}' is not 'oneOf': ${alts.join(", ")}`);
    }

    return i > -1 ? alts[i] : null;
  };

  f.stringify = o => (alts.indexOf(o) !== -1 ? o : null);

  return f;
};

export default oneOf;
