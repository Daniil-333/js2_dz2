class Hamburger {
    dataSize = [
        {title: 'big', price: 100, cal: 40},
        {title: 'small', price: 50, cal: 20},
    ];
    dataStuffing = [
        {title: 'cheese', price: 10, cal: 20},
        {title: 'salad', price: 20, cal: 45},
        {title: 'potato', price: 15, cal: 10},
    ];
    constructor (size, stuffing) {
        this.size = this.getSize();
        this.stuffing = this.getStuffing();
        this.renderResult();
    }
    addTopping(topping) {} // Добавить добавку
    removeTopping(topping) {} // Убрать добавку
    getToppings(topping) {} // Получить список добавок
    getSize() {
        return document.querySelector('select[name=sizeHamb]').options[document.querySelector('select[name=sizeHamb]').options.selectedIndex].value;
    } // Узнать размер гамбургера
    getStuffing() {
        return document.querySelector('select[name=stuffingHamb]').options[document.querySelector('select[name=stuffingHamb]').options.selectedIndex].value;
    } // Узнать начинку гамбургера
    calculatePrice() {
        let totalPrice = null;
        document.querySelector('select[name=sizeHamb]').addEventListener('change', (event) => {
            this.dataSize.forEach(function (obj) {
                if(event.target.value === obj.title) {
                    return totalPrice += obj.price;
                }
            })
        });
        document.querySelector('select[name=stuffingHamb]').addEventListener('change', (event) => {
            this.dataStuffing.forEach(function (obj) {
                if(event.target.value === obj.title) {
                    return totalPrice += obj.price;
                }
            })
        });
        return totalPrice;
    } // Узнать цену
    calculateCalories() {
        let totalCallory = null;
        for (let i = 0; i < this.dataSize.length || i < this.dataStuffing.length; i++) {
            if (this.size === this.dataSize[i].title || this.stuffing === this.dataStuffing[i].title) {
                return totalCallory += this.dataSize[i].cal;
            }
        }
        // for (let i = 0; ; i++) {
        //     if () {
        //         return totalCallory += this.dataStuffing[i].cal;
        //     }
        // }
        // return totalCallory;
    } // Узнать калорийность
    renderResult() {
        return price.textContent = `Стоимость гамбургера ${this.calculatePrice()} рублей. Каллоийность ${this.calculateCalories()} каллорий`
    } // Отображение разметки стоимости и каллорий
}
let btnCost = document.querySelector('.mainForm__btn-cost');
let price = document.querySelector('.total__price');
btnCost.addEventListener('click', (event) => {
    event.preventDefault();
    let hamburger = new Hamburger(this.size, this.stuffing);
});

//Ниже по тексту Черновик!
data = [
    {title: 'big', price: 100, cal: 40},
    {title: 'small', price: 50, cal: 20},
    {title: 'cheese', price: 10, cal: 20},
    {title: 'salad', price: 20, cal: 45},
    {title: 'potato', price: 15, cal: 10}
];

let totalCallory = null;
data.forEach(function (obj, title) {
    if (this.size === obj.title) {
        return totalCallory += obj.cal;
    }
});



