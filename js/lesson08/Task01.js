'use strict';


{
  const generateArray = (len) => [...new Array(len)].map(item => Math.round(Math.random() * 100));

  const arr = generateArray(10);
  console.log(arr);
}
