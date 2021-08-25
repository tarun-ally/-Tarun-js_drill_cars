// problem 5
function problem_5(inventory){
    let res5=[];
    for (let i=0;i<inventory.length;i++){
        if (inventory[i].car_year<2000) {
            res5.push(inventory[i]);

        }
    }

    return res5;
}
module.exports = {
    problem_5
}