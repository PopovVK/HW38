
function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
  
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i]);
    }
  
    return accumulator;
  }
  

  const result = reduce([1, 2, 3], (prev, el) => prev + el, 0);
  console.log(result);
  