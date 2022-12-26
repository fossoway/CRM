'use strict';


{
  const generateArray = (arr) => {
    const sumArray = arr.reduce((sum, item) => sum + item, 0);
    if (sumArray > 50) {
      return arr;
    } else {
      arr.push(Math.round(Math.random() * 10));
      return generateArray(arr);
    }
  };


  const arr = [1, 2, 5];
  console.log(generateArray(arr));
}
