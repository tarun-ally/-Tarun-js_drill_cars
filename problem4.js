// problem 4
function problem_4(inventory){
    let res4=[];

    for (let i=0;i<inventory.length;i++){
        res4.push(inventory[i].car_year);
    }

    return res4;
}
module.exports = {
    problem_4
}