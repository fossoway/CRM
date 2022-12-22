'use strict';


{
  const generateArray = (len, n, m) => [...new Array(len)].map(item => {
    const start = Math.min(n, m);
    const end = Math.max(n, m);
    return start + Math.floor(Math.random() * (end - start + 1))
  });


  const arr = generateArray(10, -5, 5);
  console.log(arr);
}
