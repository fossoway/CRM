'use strict';


{
  const getAverageValue = (arr) => {
    const result = arr.reduce((sum, current) => sum + current, 0);
    return Math.floor(result / arr.length);
  }


  const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
  console.log(getAverageValue(allCashbox));
}
