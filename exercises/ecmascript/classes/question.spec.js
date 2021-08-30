import Question from './question';

test('validate the construction of the class', () => {
  let question = new Question('What is your favourite programming language?', 'FREE_TEXT');
  expect(question.question).toEqual('What is your favourite programming language?');
  expect(question.type).toEqual('FREE_TEXT');
  expect(question.answers).toEqual([]);
});

test('should add an answer to the array', () => {
  let question = new Question('What is your favourite programming language?', 'FREE_TEXT');
  expect(question.answers).toEqual([]);
  question.addAnswer('Javascript');
  expect(question.answers).toEqual(['Javascript']);
  question.addAnswer('.NET');
  expect(question.answers).toEqual(['Javascript', '.NET']);
});

test('should create a count of every given answer', () => {
  let question = new Question('What is your favourite programming language?', 'FREE_TEXT');
  question.addAnswer('Javascript');
  question.addAnswer('Java');
  question.addAnswer('Javascript');
  question.addAnswer('Javascript');
  question.addAnswer('Java');
  question.addAnswer('.NET');
  const answerCount = question.createAnswerCount();
  expect(answerCount['Javascript']).toBe(3);
  expect(answerCount['Java']).toBe(2);
  expect(answerCount['.NET']).toBe(1);
});