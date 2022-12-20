'use strict';


{
  const IsPrime = (n) => {
    let i = 2;
    for (i; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  const n = prompt('Введите число');
  console.log(IsPrime(n));
}

