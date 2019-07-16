 const math = module.exports = (function() {
   
  function sum(a, b)  { return a + b; }
  function mult(a, b) { return a * b; }

  return {
    sum,
    mult
  };

  })();
 
 module.exports =  math;
