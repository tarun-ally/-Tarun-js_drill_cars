// problem 2
function problem_2(inventory){
    let res2= "Last car is a ";
    res2 += inventory[inventory.length-1].car_make+' '+inventory[inventory.length-1].car_model;
    return res2;
}

module.exports = {
    problem_2
}