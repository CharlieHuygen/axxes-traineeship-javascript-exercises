import timer from './timer';
import queue from './queue';

test('should get a timer of 25 seconds', function() {
  expect(timer()).toBe(25);
});

test('should retrieve the correct queue, [10, 20, 10]', function() {
  expect(queue()).toEqual([10, 20, 10]);
});