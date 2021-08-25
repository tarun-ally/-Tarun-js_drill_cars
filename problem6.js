// problem 6
function problem_6(inventory){
    let res6=[];
    for (let i=0;i<inventory.length;i++){
        if (inventory[i].car_make === 'Audi' ||inventory[i].car_make === 'BMW' ) {
            res6.push(inventory[i]);

        }
    }

    return res6;
}
module.exports = {
    problem_6
}