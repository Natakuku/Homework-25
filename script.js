'use strict';

class SuperMath {
    constructor() {
        this.operations = {
            "+": (x, y) => x + y,
            "-": (x, y) => x - y,
            "*": (x, y) => x * y,
            "/": (x, y) => x / y,
            "%": (x, y) => x % y
        };
    }

    calculate(x, y, operation) {
        if (this.operations.hasOwnProperty(operation)) {
            return this.operations[operation](x, y);
        } else {
            alert(`Невірний ввод: ${operation}`);
            return NaN;
        }
    }
    input(promptQuestion) {
        return prompt(promptQuestion);
    }
    check(obj) {
        const { X, Y, znak } = obj;
        const confirmation = confirm(`Чи хотіли б ви зробити математичну операцію з ${znak}, з ${X} та ${Y}?`);

        if (confirmation) {
            const result = this.calculate(X, Y, znak);
            alert(`Результат: ${result}`);
        } else {
            const newX = Number(this.input(`Введить першу цифру:`));
            const newY = Number(this.input(`Введить другу цифру:`));
            const newZnak = this.input(`Введить операційний знак (+, -, *, /, %):`);

            const newResult = this.calculate(newX, newY, newZnak);
            alert(`Результат: ${newResult}`);
    }
    }

}
const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);


