const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5; // от 5 до 10 чисел
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  
  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = progression[hiddenIndex].toString();
  
  // Создаем прогрессию с скрытым элементом
  const progressionWithHidden = [...progression];
  progressionWithHidden[hiddenIndex] = '..';
  const question = progressionWithHidden.join(' ');
  
  return [question, correctAnswer];
};

const gameDescription = 'What number is missing in the progression?';

export { generateRound, gameDescription };
