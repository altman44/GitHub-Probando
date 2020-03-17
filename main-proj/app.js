const useless = require('GitHub_Probando');
const _ = require('lodash');

useless();

const newArray = _.compact([1, 0, false, '', 2]);

console.log(newArray);