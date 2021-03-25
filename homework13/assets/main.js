const HAM_SIZE = {
    big: {
        price: 120,
        cal: 400,
    },
    medium: {
        price: 80,
        cal: 300,
    },
    small: {
        price: 40,
        cal: 250,
    }
};

const TOPPINGS = {
    chillie: {
        price: 15,
        cal: 5,
    },
    cheese: {
        price: 30,
        cal: 40,
    },
    salad: {
        price: 50,
        cal: 10,
    }
};

function ham(size) {
    this.size = size;
    this.price = 0;
    this.cal = 0;
    this.topping = [];
    this.addTopping = function (topping) {
        this.topping.push(topping);
    };

    this.calcCal = function () {
        return this.size.cal + this.topping.reduce((acc, elem) => {
            return acc + elem.cal;
        }, 0);
    }

    this.calcPrice = function () {
        return this.size.price + this.topping.reduce((acc, elem) => {
            return acc + elem.price;
        }, 0);
    }
}

const hamburger = new ham(HAM_SIZE.medium);

hamburger.addTopping(TOPPINGS.chillie);
hamburger.addTopping(TOPPINGS.salad);


console.log(`Цена гамбургера $${hamburger.calcPrice()}, калораж ${hamburger.calcCal()} ккал`);