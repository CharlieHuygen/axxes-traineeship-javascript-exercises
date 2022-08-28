let timer = () => {
  // TODO 1: Fix the test by preventing 'hoisting from happening'
  let timing; 
  for(let i = 1; i < 26; i++) {
    timing = i;
  }
  return timing; 
}

export default timer;