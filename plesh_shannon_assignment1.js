// Author: Shannon Plesh
// Assignment 2
// The function of this program is to determine if the person meets the criteria needed to buy a hot property.
// Set variables
propertyTimer= 20, canBarrowMoney = true, money = 10000000, beachFrontMiami9 = "Hot property",beachFrontMiami8 = "Norman property",beachFrontMiami7 = "Norman property", person = "Serene", personP = "Serene\'s", propertiesToCheck = [beachFrontMiami9, beachFrontMiami8, beachFrontMiami7];
// Procedure
// The code below introduces us to the person and the intent of the story.
console.log(person + " wants to buy a hot property in Miami Beach.");
howManyProperties();
console.log(person + " is looking at the first property on her list which is listed as a " + propertiesToCheck[0] + ".");


// This boolean function checkForSale will check to see if the person is approved for the loan and output the correct responce.
function checkForSale() {	if (canBarrowMoney === true) {console.log(person + " is approved for the loan!");
return status === true;
	}else {
	console.log(person + " is not approved for the loan.");
	}
	return status === false;
}
// Below is where the boolean function checkForSale is called.
checkForSale();

// The number function below is used to check to see if there is enough money to buy this property.
// This function will take the person string and concatenate it with a string of text that outputs the correct responce. In this example the property costs 1000000.	
function checkMoney() { if (money < 1000000) {console.log(person + " dose not have enough money to buy this property.");
	
} else {if (money > 1000000) {console.log(person + " has enough money to buy this property.");
}}
}
// Here is where the function checkMoney is called.
checkMoney();

// the string function below is used to determine if the property matches the string "Hot property!"
function checkHot() { if (beachFrontMiami9 === "Hot property") { console.log("Beach front property #9 is a hot property!");
	
} else {console.log("This is not a hot property.");
	
}
	
}


// The array function below is used to count the properties that the person wants to visit and output the total number. Looking ahead, I'd like to turn the items in this array into objects that hold information pertaining to the property. 

function howManyProperties() {console.log(person + " has " + propertiesToCheck.length + " properties that she is interested in looking at today.");
	
}

// number function = property timmer with wile loop.
// this function will check the ammout of time on the propertyTimer and reduce the number by 1 iteration every time the wile loop runs. 
function checkDay() { while (propertyTimer > 0) {console.log("Hot property for " + propertyTimer + " minutes.");
	propertyTimer--}
	
}
checkDay();	
