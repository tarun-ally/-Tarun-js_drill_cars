// problem 3
function problem_3(inventory){
    let res3=[];
    for (let i=0;i<inventory.length;i++){
        res3.push(inventory[i].car_model);
    }

    // console.log(res3);
    res3.sort();
    return res3;
}
module.exports = {
    problem_3
}