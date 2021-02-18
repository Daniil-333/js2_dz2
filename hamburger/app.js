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
        this.renderCost();
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
        for (let i = 0; i < this.dataSize.length; i++) {
            if (this.size === this.dataSize[i].title) {
                return totalCallory += this.dataSize[i].cal;
            }
        }
        for (let i = 0; i < this.dataStuffing.length; i++) {
            if (this.stuffing === this.dataStuffing[i].title) {
                return totalCallory += this.dataStuffing[i].cal;
            }
        }
        return totalCallory;
    } // Узнать калорийность
    renderCost() {
        return price.textContent = `Стоимость гамбургера ${this.calculatePrice()} рублей`
    } // Отображение разметки стоимости
    renderCal() {} // Отображение разметки калорийности
}
let btnCost = document.querySelector('.mainForm__btn-cost');
let price = document.querySelector('.total__price');
btnCost.addEventListener('click', () => {
    let hamburger = new Hamburger(this.size, this.stuffing);
});