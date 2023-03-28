var generatePassword = require('generate-password');

var password = generatePassword.generate({
	length: 10,
	numbers: true
});
console.log(password);