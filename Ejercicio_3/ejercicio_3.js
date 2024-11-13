let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumarSalarios (salarios) {
    sumaTotal = 0;
    for (let salario in salarios) {
        sumaTotal += salarios[salario]
    }
    return sumaTotal;
}

console.log(sumarSalarios(salaries));