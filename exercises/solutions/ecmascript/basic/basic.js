// TODO 4: instead of using the if statement, use the default operator.
  let validateAnswer = (answer = 'Yes', correctAnswer) => {
    // TODO 5: optimize the code by making the comparison case insensitive and remove all surrounding whitespaces and fix the tests.
    let emptyIsTruthyApparenlty = ['',undefined,null]; 
    if (emptyIsTruthyApparenlty.includes(answer)) {
      return true
    } else {
      let formattedAnswer = answer.trim();
      return formattedAnswer.toLocaleLowerCase() === correctAnswer.toLocaleLowerCase();
    }
  }
  
  function validateAnswers(correctAnswer, ...answers) {
    // TODO 6: Use the REST operator in order to optimize the code below and make sure the unit test still works.
    console.log(arguments);
    return answers.map(answer => validateAnswer(answer, correctAnswer));
  }
  
  // To ensure we speak about a new list we need to construct a new array every time we add a new question
  function appendQuestion(questions, newQuestion) {
    // TODO 7: optimize the code below to use the SPREAD operator to create a new array. (oneliner?)
    const newQuestions = [...questions, newQuestion];
    return newQuestions;
  }
  
  // TODO 8: optimize the code below by using template literals.
  function printQuestions(questions) {
    let print = '';
    questions.map((question, i) => {
      print += `${i + 1}) ${question}\n`;
    })
    return print;
  }

  /* --------------------------- */
  
  function isMostGivenAnswerCorrect(question) {
    if (!question) {
      return false;
    }
    const correctAnswer = question.correctAnswer;
    const answers = question.answers || [];
    let mostGivenAnswerIndex = 0;
    
    for(let i = 0; i < answers; i++) {
      if (answers[i].count > answers[mostGivenAnswerIndex]) {
        mostGivenAnswerIndex = i;
      }
    }
  
    return answers.length > 0 && answers[mostGivenAnswerIndex].value === correctAnswer.value;
  }
  
  function validateSessionMessages(messages = []) {
    const [firstMessage, ...otherMessages] = messages;
  
    return firstMessage === 'INIT_SESSION' && otherMessages[otherMessages.length - 1] === 'STOP_SESSION';
  }
  
  
  export { 
    validateAnswer, 
    validateAnswers, 
    appendQuestion, 
    printQuestions,
    isMostGivenAnswerCorrect,
    validateSessionMessages
  };