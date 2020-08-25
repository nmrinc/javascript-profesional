// Interfaces

enum Color {
    Brown = 'Brown',
    Pink = 'Pink'
}

interface Rectangle {
    width: number;
    height: number;
    color?: Color;
}

let rect: Rectangle = {
    width: 4,
    height: 5,
    color: Color.Pink,
}

const area = (r: Rectangle): number => {
    return r.height * r.width
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString()); // Doesn't throw an error because, since a interface it's an object, this inherit the .toString function.

rect.toString = function () {
    return this.color ? `A ${this.color} rectangle` : `A rectangle`;
};

console.log(rect.toString());