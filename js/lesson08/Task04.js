'use strict';


{
  const makeArrayLeapYear = (n, m) => {
    let start = Math.min(n, m);
    const end = Math.max(n, m);
    const arrayLeapYear = [];

    for (start; start <= end; start += 1) {
      if ((!(start % 4) && start % 100) || !(start % 4 && start % 400)) {
        arrayLeapYear.push(start);
      }
    }
    return arrayLeapYear;
  }

  console.log(makeArrayLeapYear(1200, 2022));
}
