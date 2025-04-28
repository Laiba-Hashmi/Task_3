let number = prompt("Enter a 4-digit number:");
console.log(`The digits are : ${number}`);
if (number.length == 4) {
    console.log(`Your result is :`);
    console.log(number[3] +' , '+ number[2] +' , '+ number[1] +' , '+ number[0]); 
}
 else {
    console.log("Invalid input. Please enter a 4-digit number.");
}