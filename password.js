const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome! What is your password?", function(input){
    tokens = input.split(' ');
	
	password = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

    console.log('mathSymbol', mathSymbol);
            console.log('num1', num1);
            console.log('num2', num2);

            if (mathSymbol === "+"){
                console.log(num1 + num2);
            }
    
    console.log()

    reader.close()

});