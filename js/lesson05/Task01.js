'use strict';


{
  let header = `m^n`.padEnd(16, ' ');
  for (let m = 1; m <=10; m += 1) {
    header = header + (m + '').padEnd(16, ' ');
    if (m === 10) {
      console.log(header);
    }
  }

  for (let i = 1; i <= 10; i += 1) {
    let str = (i + '').padEnd(16, ' ');
    for (let j = 1; j <= 10; j += 1) {
      str = str + (i ** j + '').padEnd(16, ' ');
      if (j === 10) {
        console.log(str);
      }
    }
  }
}
