const batchName = "plutonium"

let printName = function(){
    console.log('Batch name is ', batchName);
}

module.exports.name = printName;
module.exports.func1 = printName;
