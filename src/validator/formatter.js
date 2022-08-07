let str = "functionUp"
let str1 = str.trim()

let str2 = str.toLowerCase()
let str3 = str.toUpperCase()

const printName4 = function(){
    console.log(str1);
}

const printName5 = function(){
    console.log(str2);
}

const printName6 = function(){
    console.log(str3);
}



module.exports.trim = printName4;
module.exports.toLowerCase = printName5;
module.exports.toUpperCase = printName6;
