class Car {
    _x;
    _y;
    _width;
    _height;
    _speed;
    _src;
    direction;

    constructor(x, y, width, height, speed, src,direction) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._speed = speed;
        this._src = src;
        this.direction = direction;

    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }

    moveLeft() {
        this._x -= this._speed;
    }

    moveRight() {
        this._x += this._speed;
    }
    moveDown () {
        this._y += this._speed
    }
    moveUp () {
        this._y -= this._speed
    }
    autoMove(){
        if (this.direction === 0) {
            this.moveUp();
            return;
        }
        if (this.direction ===1) {
            this.moveDown();
        }
    }

    drawCar(ctx) {
        let image = new Image();
        image.src = this._src;
            ctx.drawImage(image, this._x, this._y, this._width, this._height);



    }
}