const myLog = require('echo-my-log');
const Multi = require('echo-my-multi');

console.log(myLog());

const multi = new Multi(1, 10);
console.log(multi[0] * multi[1]);
