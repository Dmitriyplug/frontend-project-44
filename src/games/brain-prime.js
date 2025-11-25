const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { generateRound, gameDescription };
