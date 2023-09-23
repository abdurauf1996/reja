class Shop {
  constructor(breads, lagmans, colas) {
    this.breads = breads;
    this.lagmans = lagmans;
    this.colas = colas;
  }

  remaining() {
    const time = new Date().toLocaleTimeString();
    console.log(
      `Now at ${time} there are ${this.breads} breads, ${this.lagmans} lagmons and ${this.colas} colas!`
    );
  }

  sell(product, quantity) {
    const time = new Date().toLocaleTimeString();
    if (product === "bread") {
      this.breads -= quantity;
    } else if (product === "lagman") {
      this.lagmans -= quantity;
    } else if (product === "cola") {
      this.colas -= quantity;
    }
    console.log(`Sold ${quantity} ${product}(s) at ${time}.`);
  }

  accept(product, quantity) {
    const time = new Date().toLocaleTimeString();
    if (product === "bread") {
      this.breads += quantity;
    } else if (product === "lagman") {
      this.lagmans += quantity;
    } else if (product === "cola") {
      this.colas += quantity;
    }
    console.log(`Accepted ${quantity} ${product}(s) at ${time}.`);
  }

  leftover() {
    const time = new Date().toLocaleTimeString();
    console.log(
      `Now at ${time} there is ${this.breads} bread, ${this.lagmans} lagmans, and ${this.colas} colas!`
    );
  }
}

const shop = new Shop(4, 5, 2);

shop.remaining();
shop.sell("bread", 3);
shop.accept("cola", 4);
shop.leftover();
