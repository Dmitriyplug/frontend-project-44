const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  
  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2).toString();
  
  return [question, correctAnswer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export { generateRound, gameDescription };
