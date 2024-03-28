class HtmlBlock {
    constructor() {
        this.styles = {};
        this.rootElement = null;
    }

    addStyle(cssClass) {
        this.styles[cssClass.className] = cssClass;
    }

    setRootElement(rootElement) {
        this.rootElement = rootElement;
    }

    getCode() {
        let htmlCode = '';

        // Генерация стилей
        htmlCode += '<style>\n';
        for (const cssClass of Object.values(this.styles)) {
            htmlCode += cssClass.getCss();
        }
        htmlCode += '</style>\n';

        // Добавление HTML-содержимого корневого элемента
        if (this.rootElement) {
            htmlCode += this.rootElement.getHtml();
        }

        return htmlCode;
    }
}

// Пример использования класса HtmlBlock
const htmlBlock = new HtmlBlock();

// Добавление CSS классов
const myClass = new CssClass('my-class');
myClass.setStyles('color', 'red');
myClass.setStyles('font-size', '16px');
htmlBlock.addStyle(myClass);

// Создание HTML элементов
const div = new HtmlElement('div', false, '', { id: 'main' }, { color: 'blue' });
div.addChild(new HtmlElement('p', false, 'Hello, World!'));
div.addChild(new HtmlElement('a', false, 'Click me', { href: '#' }));

// Установка корневого элемента
htmlBlock.setRootElement(div);

// Получение HTML кода
console.log(htmlBlock.getCode());
