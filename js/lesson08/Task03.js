'use strict';


{
  const generateArray = (len, n, m, parity) => [...new Array(len)].map(item => {
    const start = Math.min(n, m);
    const end = Math.max(n, m);
    const i = Math.floor(start + Math.random() * (end - start));
    if (parity === 'odd') {
      if (!(i % 2)) {
        return i + 1;
      } else {
        return i;
      }
    }

    if (parity === 'even') {
      if (i % 2) {
        return i + 1;
      } else {
        return i;
      }
    }
  });


  const arr = generateArray(10, -9, 9, 'odd');
  console.log(`Массив с нечетными числами: ${arr}`);

  const arr2 = generateArray(10, 10, -9, 'even');
  console.log(`Массив с четными числами: ${arr2}`);
}
