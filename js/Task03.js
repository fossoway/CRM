'use strict';


{
  const calculate = (total, count, promo) => {
    let totalWithSale = total;

    if (count > 10) {
      totalWithSale *= 0.97;
    }

    if (total > 30000) {
      totalWithSale -= (total - 30000) * 0.85;
    }

    if (promo === "METHED") {
      totalWithSale *= 0.9;
    }

    if (promo === "G3H2Z1" && totalWithSale > 2000) {
      totalWithSale -= 500;
    }

    return totalWithSale;
  }


  console.log(calculate(35000, 12, "METHED"));
  console.log(calculate(35000, 9, "METHED"));
  console.log(calculate(35000, 9, "G3H2Z1"));
  console.log(calculate(10000, 5, "G3H2Z1"));
}
