//Dream Application - Instacart Upgrade


// Values + Operations + Using Arrays
let prices = [5, 3, 10];
let totalValues = prices.reduce((sum, price) => sum + price, 0);

console.log("Total: $" + totalValues); //I am featuring the variable naming lesson. I also used the .reduce method from using arrays to give the total price of each item for the user

let couponAmount = "10% off any item";
console.log(parseInt(couponAmount)); //This is using the parseInt data type conversion method. This converts the integer amount from the string


// Stringing Characters Together
let item = "Milk";
let category = "Dairy";

console.log(item + " has been added to the " + category + " category.");//This is highlighting the ability to add variables to a string. This shows a response to the user that when they add the item 'Milk' to their list, it automatically catgorizes as a Dairy item.

let budgetRemaining = 12.99
let result = `Your remaining budget is: $${budgetRemaining}\u{1f4b8}`;

console.log(result);//This shows how we can use temperal literates to inject a value into a string seamlessly such as informing a user about their remaining budget. I also converted an emoji with unicode. 



// Control Structures and Logic
let budget = 20;
let totalBudgetAmount = 25;

if (totalBudgetAmount > budget) {
    console.log("You are over budget!\u{1F622}");
} else {
    console.log("You are within budget\u{1F60A}");
}; //From the Control Structures and Logic lesson, I used an if/else statement. This method sends an alert to the user if they are over their total budget amount or are within budget



// Building Arrays + Values/Data Types
let userData = ["Meagan", 34, {favoriteStore: "Schnucks", isPremium: false}, 250.00]; //I created a mixed array that represents user data
console.log(userData[0]);//logs the first item in the array


// Using Arrays
let groceryList = ["Milk", "Eggs", "Chicken", "Spinach", "Coffee", "Tacos"];

// Add a new item
groceryList.push("Apples");

console.log(groceryList); // I built an array called groceryList and pushed a new item to the end of the list. This method shows how a user, either on a shared list or on the current list, adds a new item to their grocery list.


// Working With Loops
let currentGroceryList = ["Milk", "Eggs", "Chicken"];

for (let i = 0; i < currentGroceryList.length; i++) {
    console.log(currentGroceryList[i]);
}; //I used a for loop to print out each item on the grocery list for the user

let dairyItems = {
    items: ["Milk", "Yogurt", "Cheese", "Ice Cream"],
    categoryOfItems: "Dairy",
    store: "Trader Joes",
    aisle: 3,
    purchased: false
};

for (let key in dairyItems) {
    if (key === "aisle") {
        console.log(dairyItems[key]);
    }
}//This is showing how to use a for...in loop when working with objects to provide the aisle number to the user for dairy items.

