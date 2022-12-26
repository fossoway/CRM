'use strict';


{
  const cart = {
    items: [],
    count: 0,

    get totalPrice() {
      return this.calculateItemPrice();
    },

    increaseCount(n) {
      this.count += n;
    },

    clear() {
      const clearCart = {
        items: [],
        count: 0,
        discount: 0,
      };
      Object.assign(this, clearCart);
    },

    calculateItemPrice() {
      const {items} = this;
      const itemPrice = items.reduce((sum, item) =>
        sum + item.productPrice * item.productCount, 0);
      return itemPrice - itemPrice * this.discount / 100;
    },

    add(productName, productPrice, productCount = 1) {
      const item = {
        productName,
        productPrice,
        productCount,
      };
      this.items.push(item);
      this.increaseCount(productCount);
    },

    print() {
      const cartStr = JSON.stringify(this);
      console.log(cartStr);
      console.log(`Общая стоимость корзины: ${this.totalPrice}`);
    },

    discount: 0,

    setDiscount(promocode) {
      if (promocode === 'METHED') {
        this.discount = 15;
      }
      if (promocode === 'NEWYEAR') {
        this.discount = 21;
      }
    },
  };

  cart.add('watch', 2500, 4);
  cart.print();
  cart.add('phone', 11000);
  cart.print();
  cart.setDiscount('METHED');
  cart.print();
  cart.clear();
  cart.print();
  cart.add('watch', 4000, 2);
  cart.add('dress', 3800);
  cart.add('book', 768, 11);
  cart.setDiscount('NEWYEAR');
  cart.print();
}
