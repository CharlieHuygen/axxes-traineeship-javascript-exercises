function timer() {
  // TODO 1: Fix the test by preventing 'hoisting from happening'
  for(var i = 1; i < 26; i++) {
    // do something ramdom;
  }
  return i; 
}

export default timer;