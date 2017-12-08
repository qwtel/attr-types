export const number = attr => Number(attr);

number.stringify = n => `${n}`;

export default number;
