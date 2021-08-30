import { 
    validateAnswer, 
    validateAnswers, 
    appendQuestion, 
    printQuestions,
    isMostGivenAnswerCorrect,
    validateSessionMessages
   } from './basic';
  
  test('should validate the given answer with the correct answer', () => {
    expect(validateAnswer('Yes', 'Yes')).toBe(true);
    expect(validateAnswer('No', 'Yes')).toBe(false);
    expect(validateAnswer('', 'Yes')).toBe(true); // ??????
    expect(validateAnswer(null, 'Yes')).toBe(true);
    expect(validateAnswer(undefined, 'Yes')).toBe(true);
    expect(validateAnswer('yes', 'Yes')).toBe(true);
    expect(validateAnswer(' YeS ', 'Yes')).toBe(true);
  });
  
  test('should validate a list of answers with the correct answer', () => {
    expect(validateAnswers(
      'Yes', // correctAnswer
      'Yes', 'No', '', null, undefined, 'yes', ' Yes')).toEqual([
        true, false, true, true, true, true, true
      ]);
  });
  
  test('should add a new question to an existing list and create a new list', () => {
    const questions = [
      'What\'s your age?',
      'What is your favourite programming language?',
      'Can you tell a joke?'
    ];
    const newQuestions = appendQuestion(questions, 'Have you learned a lot already?');
    expect(questions).toEqual([
      'What\'s your age?',
      'What is your favourite programming language?',
      'Can you tell a joke?'
    ]);
    expect(newQuestions).toEqual([
      'What\'s your age?',
      'What is your favourite programming language?',
      'Can you tell a joke?',
      'Have you learned a lot already?'
    ]);
  });
  
  test('should print a list of questions in an ordered list.', () => {
    const questions = [
      'What\'s your age?',
      'What is your favourite programming language?',
      'Can you tell a joke?',
      'Have you learned a lot already?'
    ];
    expect(printQuestions(questions)).toEqual(
      '1) What\'s your age?\n' +
      '2) What is your favourite programming language?\n' +
      '3) Can you tell a joke?\n' +
      '4) Have you learned a lot already?\n'
    )
  });
  
  test('verify if the most given answer is correct', () => {
    const question = {
      id: '123465789',
      type: 'MULTIPLE_CHOICE',
      value: 'What is the best programming language?',
      correctAnswer: {
        type: 'FREE_TEXT',
        value: 'Javascript'
      },
      answers: [
        { type: 'FREE_TEXT', value: '.NET', count: 3 },
        { type: 'FREE_TEXT', value: 'Javascript', count: 7 },
        { type: 'FREE_TEXT', value: 'Java', count: 15 },
        { type: 'FREE_TEXT', value: 'COBOL', count: 0 },
      ]
    };
    expect(isMostGivenAnswerCorrect(question)).toBe(false);
  });
  
  test('validate the session messages', () => {
    expect(validateSessionMessages([
      'INIT_SESSION',
      'SET_QUESTION',
      'SET_QUESTION',
      'STOP_SESSION'
    ])).toBe(true);
    expect(validateSessionMessages([
      'SET_QUESTION',
      'SET_QUESTION',
      'STOP_SESSION'
    ])).toBe(false);
    expect(validateSessionMessages([
      'INIT_SESSION',
      'SET_QUESTION',
      'SET_QUESTION'
    ])).toBe(false);
    expect(validateSessionMessages([])).toBe(false);
    expect(validateSessionMessages(undefined)).toBe(false);
  });