import {filterAnswers} from './answers';

test('should filter the list of answers', function() {
  const answers = [
    'Javascript is the best programming language.',
    'Why are we here?',
    null,
    '',
    'When can we start programming?',
    undefined,
    ' '
  ];
  const result = filterAnswers(answers);
  expect(result.length).toBe(3);
  expect(result).toEqual([
    {
      label: 'Javascript is the best programming language.',
      length: 44
    },
    {
      label: 'Why are we here?',
      length: 16
    },
    {
      label: 'When can we start programming?',
      length: 30
    }
  ]);
});