//TODO 3: make sure the tests still work after refactoring this method to use arrow function and possible other optimizations.
let filterAnswers = (answers) => {
  return answers.filter((answer) => {
    if (answer === null || answer === undefined) {
      return false;
    }
    return true;
  }).filter((answer) => {
    if(answer.trim() === '') {
      return false;
    }
    return true;
  }).map((answer) => ({label: answer, length: answer.length}));
}

export { filterAnswers };