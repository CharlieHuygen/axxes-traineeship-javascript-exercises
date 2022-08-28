let queue = () => {
    // TODO 2: fix the queue to make the test pass by solving the hoisting problem
    let queue = [];
    const x = 10;
    queue.push(x);
    
    if(true) {
      let x = 20;
      queue.push(x);
    }
  
    queue.push(x);
    return queue;
  }
  
  export default queue;