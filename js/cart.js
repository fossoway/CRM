'use strict';


{
  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
      return this.totalPrice;
    },

    increaseCount(n) {
      this.count += n;
    },

    clear() {
      const clearCart = {
        items: [],
        totalPrice: 0,
        count: 0,
      };
      Object.assign(this, clearCart);
    },

    calculateItemPrice() {
      const {items} = this;
      this.totalPrice = items.reduce((sum, item) => sum + item.productPrice * item.productCount, 0);
    },

    add(productName, productPrice, productCount = 1) {
      const item = {
        productName,
        productPrice,
        productCount,
      }
      this.items.push(item);
      this.increaseCount(productCount);
      this.calculateItemPrice();
    },

    print() {
      const cartStr = JSON.stringify(this);
      console.log(cartStr);
      console.log(`Общая стоимость корзины: ${this.getTotalPrice()}`);
    },
  }

  cart.add('watch', 2500, 4);
  cart.print();
  cart.add('phone', 11000);
  cart.print();
  cart.clear();
  cart.print();
  cart.add('watch', 4000, 2);
  cart.add('dress', 3800);
  cart.add('book', 768, 11);
  cart.print();
}
