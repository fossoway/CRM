'use strict';


{
  const rectangle = {
    _height: 5,
    _width: 5,

    set width(n) {
      if (Number.isInteger(n)) {
        this._width = n;
      }
    },

    set height(n) {
      if (Number.isInteger(n)) {
        this._height = n;
      }
    },

    get width() {
      return this._width;
    },

    get height() {
      return this._height;
    },

    get perimeter() {
      const per = 2 * (this.height + this.width);
      return `${per}см`;
    },

    get square() {
      const sqr = this.height * this.width;
      return `${sqr}см`;
    },
  };


  console.log(rectangle.width);
  console.log(rectangle.height);
  console.log(rectangle.perimeter);
  console.log(rectangle.square);
}
