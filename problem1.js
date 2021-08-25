// problem 1 answer
function problem_1(inventory){
    let res='Car 33 is a ';
    
    for (let i=0;i<inventory.length;i++){
        if (inventory[i].id==33) {
            res+=inventory[i].car_year+' '+inventory[i].car_make+' '+inventory[i].car_model;
        }
    }
    return res;
}

module.exports = {problem_1};
