const getRandomNumber = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  const arr = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  return arr;
};
export default getRandomNumber;
