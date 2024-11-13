function isEmpty(obj){
    for (let x in obj) {
        return false;
    }
    return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false