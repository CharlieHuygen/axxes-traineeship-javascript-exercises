import { fetchQuestions } from './promise';

test('should fetch the questions from the BE', (done) => {
  fetchQuestions().then((result) => {
    expect(result).toEqual([
      'What\'s your age?',
      'What is your favourite programming language?',
      'Can you tell a joke?'
    ]);
    done();
  });
});

test('should fetch the questions from the BE (async/await)', async () => {
  const result = await fetchQuestions();
  expect(result).toEqual([
    'What\'s your age?',
    'What is your favourite programming language?',
    'Can you tell a joke?'
  ]);
});