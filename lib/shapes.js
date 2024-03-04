class shapes {
    constructor(color, shape) {
        this.color = color;
        this.shape = shape;
    }
    set color(newColor) {
        this._color = newColor;
    }
    render() {
        throw new Error("Invalid shape and color combination");
    }
    set shape(newShape) {
        this._shape = newShape;
    }   
    get shape() {
        return this._shape;
    }
    get color() {
        return this._color;
    }   
}

class circle extends shapes {
    constructor(color, radius) {
        super(color, "circle");
        this.radius = radius;
    }   
    render(){
        return `<circle cx="25" cy="75" r="${this.radius}" fill="${this.color}"/>`
    }
}

class rectangle extends shapes {
    constructor(color, width, height) {
        super(color, "rectangle");
        this.width = width;
        this.height = height;
    }
    render(){
        return `<rect width="${this.width}" height="${this.height}" fill="${this.color}"/>`
    }
}

class square extends shapes {   
    constructor(color, side) {
        super(color, "square");
        this.side = side;
    }
    render(){
        return `<rect width="${this.side}" height="${this.side}" fill="${this.color}"/>`
    }
}

module.exports = { circle, rectangle, square };
