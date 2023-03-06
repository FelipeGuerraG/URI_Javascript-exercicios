var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var raio = Number(lines.shift()); 

var area =  pi * (raio**2);

console.log("A="+area.toFixed(4));