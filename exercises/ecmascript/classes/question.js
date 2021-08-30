// TODO 10: convert following file to a valid ES class.
var Question = function (question, type) {
    this.question = question;
    this.type = type;
    this.answers = [];
  };
  
  Question.prototype.addAnswer = function(answer) {
    this.answers.push(answer);
  };
  
  Question.prototype.createAnswerCount = function() {
    const result = {};
    this.answers.forEach(answer => {
      if (result[answer]) {
        result[answer] = result[answer] + 1;
      } else {
        result[answer] = 1;
      }
    });
    return result;
  };
  
  // TODO 11: think of a few methods and/or properties that will be a valid addition to your class and test them
  // TODO 12: think of 2 new classes that inherit from the above Question class. (eg. Multiple Choice, Word Cloud, ...)
  // TODO 13: think of some other classes that may be useful in your project and test them.
  
  export default Question;