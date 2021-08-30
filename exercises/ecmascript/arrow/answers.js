//TODO 3: make sure the tests still work after refactoring this method to use arrow function and possible other optimizations.
function filterAnswers(answers) {
    return answers.filter(function (answer) {
      if (answer === null || answer === undefined) {
        return false;
      }
      return true;
    }).filter(function(answer) {
      if(answer.trim() === '') {
        return false;
      }
      return true;
    }).map((answer) => ({label: answer, length: answer.length}));
  }
  
  export { filterAnswers };