'use strict';

{
  const eurToDol = 1.2;
  const dolToRub = 73;

  const convert = (price) => price * eurToDol * dolToRub;
  console.log(convert(500));
}
