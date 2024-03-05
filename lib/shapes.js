class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error("Invalid shape and color combination");
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="145" y="165" fill="${this.textColor}" font-size="60" text-anchor="middle">${this.text}</text>
        `;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="115" fill="${this.textColor}" font-size="60" text-anchor="middle">${this.text}</text>
        `;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
        <rect width="100" height="100" fill="${this.shapeColor}" />
        <text x="150" y="100" fill="${this.textColor}" font-size="60" text-anchor="middle">${this.text}</text>
        `;
    }
}

module.exports = { Triangle, Circle, Square };
