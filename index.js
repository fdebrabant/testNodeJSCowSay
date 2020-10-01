const myInfo = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello I'm ${myInfo.name} from ${myInfo.campus} Campus!`,
	e : "oO",
	T : "U "
}));


