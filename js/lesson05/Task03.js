'use strict';


{
  const reverse = (str) => {
    const length = str.length;
    let reverseStr = '';
    for (let i = 0; i < length; i += 1) {
      reverseStr = str[i] + reverseStr;
    }

    return reverseStr;
  }

  console.log(reverse("Привет мир"));
}
