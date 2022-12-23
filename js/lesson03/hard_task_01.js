'use strict';


{
  const getNod = (a, b) => {
    if (a < b) {
      let minNum = a;
      let maxNum = b;
    }
    let maxNum = a;
    let minNum = b;

    let nod = maxNum % minNum;

    while (nod !== 0) {
      maxNum = minNum;
      minNum = nod;
      nod = maxNum % minNum;
    }
    return minNum;
  }

  console.log(getNod(140, 96));
  console.log(getNod(96, 140));
  console.log(getNod(27, 9));
  console.log(getNod(15, 28));
}
