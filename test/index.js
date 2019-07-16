
const { counter, math }  = require('../libs')
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

 console.log( math.sum(7, 3) );
 console.log( math.mult(9, 2) );

