let menu = {
    width: 200,
    height: 441,
    title: "Mi menú",
    tabla: 345
};

function multiplyNumeric(menu) {
    for (let x in menu) {
        if (typeof menu[x] === "number") {
        menu[x] *= 2;
        }
    }
    return menu;
}

multiplyNumeric(menu)
console.log(menu);