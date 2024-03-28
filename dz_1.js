class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Get - свойство для возврата радиуса
    get radius() {
        return this.radius;
    }

    // Set - свойство для установки радиуса 
    set radius(newRadius) {
        this.radius = newRadius;
    }

    // Get - свойство для возврата диаметра 
    get diametr() {
        return this.radius * 2
    }

    // Метод для вычисления площади окружности 
    calcArea() {
        return Math.PI * this.radius ** 2;
    }

    // Метод для вычисления длины окружности 
    calcCircleLength() {
        return 2 * Math.PI * this.radius;
    }
}

let myCircle = new Circle(5);
console.log(`Радиус окружности -> ${myCircle.radius}`)
console.log(`Диаметр окружности -> ${myCircle.diametr}`)
console.log(`Площадь окружности -> ${myCircle.calcArea}`)
console.log(`Длина окружности -> ${myCircle.calcCircleLength}`)