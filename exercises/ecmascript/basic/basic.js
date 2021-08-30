// TODO 4: instead of using the if statement, use the default operator.
function validateAnswer(answer, correctAnswer) {
    if (!answer) {
      answer = 'Yes'
    }
    // TODO 5: optimize the code by making the comparison case insensitive and remove all surrounding whitespaces and fix the tests.
    return (answer || '').toLowerCase() === correctAnswer;
  }
  
  function validateAnswers(correctAnswer) {
    // TODO 6: Use the REST operator in order to optimize the code below and make sure the unit test still works.
    return Array.prototype.slice.call(arguments, 1)
      .map(answer => validateAnswer(answer, correctAnswer));
  }
  
  // To ensure we speak about a new list we need to construct a new array every time we add a new question
  function appendQuestion(questions, newQuestion) {
    // TODO 7: optimize the code below to use the SPREAD operator to create a new array. (oneliner?)
    const newQuestions = [];
    for(let i = 0; i < questions.length; i++) {
      newQuestions.push(questions[i]);
    }
    newQuestions.push(newQuestion);
    return newQuestions;
  }
  
  // TODO 8: optimize the code below by using template literals.
  function printQuestions(questions) {
    let print = '';
    // maybe use .map(...)?
    for(let i = 0; i < questions.length; i++) {
      print += (i + 1) + ') ' + questions[i] + '\n';
    }
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