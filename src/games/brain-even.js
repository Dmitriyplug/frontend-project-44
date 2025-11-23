const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export { generateRound, gameDescription };
