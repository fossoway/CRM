'use strict';


{
  const getAveragePriceGoods = (arr) => {
    const sumAveragePriceCategory = arr.map(item => item[1] / item[0]).reduce((sum, current) => sum + current, 0);
    return Math.round(sumAveragePriceCategory / arr.length);
  }

  const allCashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
  ];

  console.log(getAveragePriceGoods(allCashbox));
}
