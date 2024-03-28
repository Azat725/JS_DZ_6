// Определение класса CssName
class CssName {
    // Конструктор класса с параметром className
    constructor(className) {
        this.className = className; // Устанавливаем значение свойства className объекта
        this.styles = {}; // Инициализируем пустой объект стилей
    }

    // Метод для установки стиля
    setStyles(style, value) {
        this.styles[style] = value; // Устанавливаем стиль и его значение в объекте стилей
    }

    // Метод для удаления стиля
    removeStyle(style) {
        if(this.styles.hasOwnProperty(style)) { // Проверяем, существует ли указанный стиль
            delete this.styles[style]; // Удаляем стиль из объекта стилей
        }
    }

    // Метод для получения CSS кода в виде строки
    getCss() {
        let cssStr = `.${this.className} {\n`; // Формируем начало CSS правила
        for (const [key, value] of Object.entries(this.styles)) { // Перебираем все стили
            cssStr += `    ${key}: ${value};\n`; // Добавляем каждый стиль в формате ключ: значение
        }
        cssStr += '}\n'; // Заканчиваем CSS правило
        return cssStr; // Возвращаем сформированный CSS код
    }
}

// Создание экземпляра класса CssName с именем 'my-class'
const myClass = new CssName('my-class');
myClass.setStyles('color', 'red'); // Установка стиля 'color' с значением 'red'
myClass.setStyles('font-size', '16px'); // Установка стиля 'font-size' с значением '16px'
console.log(myClass.getCss()); // Вывод CSS кода

myClass.removeStyle('color'); // Удаление стиля 'color'
console.log(myClass.getCss()); // Вывод CSS кода без удаленного стиля
