var moment = require("moment");
var unique = require('uniq');
var myDate = new Date();
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
console.log(myDate);
var mycoolDate = moment(myDate).format("LL");
console.log(mycoolDate);
