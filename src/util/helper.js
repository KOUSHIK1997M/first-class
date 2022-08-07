let today = new Date().toLocaleString()

const nameOfMonth = new Date().toLocaleString('default',{month:'long'});

const getBatchInfo = "Plutonium, W3D3, the topic for today is Nodejs module system’";

const printName1 = function(){
    console.log("The current date is: ",today);
}

const printName2 = function(){
    console.log("The current month is: ", nameOfMonth);
}

const printName3 = function(){
    console.log(getBatchInfo);
}



module.exports.printDate = printName1;
module.exports.printMonth = printName2;
module.exports.getBatchInfo = printName3;