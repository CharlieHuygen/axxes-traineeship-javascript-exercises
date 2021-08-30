// In the real world this method would do a async fetch to the BE
function fetchQuestions() {
    // TODO 13: play around with the resolve and reject method and adapt the test accordingly.
    return new Promise((resolve) => {
      return resolve([
        'What\'s your age?',
        'What is your favourite programming language?',
        'Can you tell a joke?'
      ]);
    });
  }
  
  export { fetchQuestions }