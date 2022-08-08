var _ = require('lodash');


const lodash1 = function () {
    let arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']
    let arr1 = _.chunk(arr, 3);
    console.log(arr1);
}

const lodash2 = function () {
    let tail= [1,3,5,7,9,11,13,15,17,19]
    let tile1 = _.tail(tail)
    console.log(tile1);
}

_.union([2], [1, 2]);

const lodash3 = function (){
    // let union = [2,13,5,7],[5,17,9,1],[4,9,7,6,12,5],[3,10,2,4,9,7],[9,4,21,11]
    let union1 = _.union([2,13,5,7],[5,17,9,1],[4,9,7,6,12,5],[3,10,2,4,9,7],[9,4,21,11]);
    // let union2 = _.uniq(union1);
    console.log(union1);
}

const lodash4 = function(){
    let a =[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let fromPairs = _.fromPairs(a);
    console.log(fromPairs);
}

module.exports.chunk = lodash1;
module.exports.tail = lodash2;
module.exports.union = lodash3;
module.exports.fromPairs = lodash4;