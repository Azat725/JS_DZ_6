class HtmlElement {
    constructor(tagName, selfClosing = false, textContent = "", attributes = {}, styles = {}) {
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.textContent = textContent;
        this.attributes = attributes;
        this.styles = styles;
        this.children = [];
    };

    serAttribute(attribute, value) {
        this.atributes[attribute] = value;
    }

    setStyles(style, value) {
        this.styles[style] = value;
    }

    addChild(child) {
        this.children.push(child);
    }

    addChildStart(child) {
        this.children.unshift(child);
    }

    getHtml() {
        let elementStr = `<${this.tagName}`;

        for (let [key, value] of Object.entries(this.attributes)) {
            elementStr += `${key}="${value}"`;
        }
        if(Object.keys(this.styles).length > 0) {
            let stylesStr = Object.entries(this.styles).map(([key, value]) => `${key}:${value}`).join(';');
            elementStr = `style=${stylesStr}`;
        }

        if(this.selfClosing) {
            elementStr += '/>\n';
        } else {
            elementStr += '>\n';
            if(this.textContent) {
                elementStr += `${this.textContent}\n`;
            }
            this.children.forEach(child => {
                elementStr += `${child.getHtml()}`;
            });
            elementStr += `<${this.tagName}>\n`;
        }

        return elementStr;
    }
}

