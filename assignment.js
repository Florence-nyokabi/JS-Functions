/*
You manage a grocery store and need to keep track of the inventory of various items. 
You will use arrays to store the data and various functions to manipulate and analyze the data. 
*/

// Create an array containing the names of all items in the inventory maximum of 10.
let inventory = ["bananas", "mangoes","kiwi", "passion", "carrots", "watermelon", "oranges", "grapes"];

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stock = [10, 20, 30, 40, 50, 60, 70, 80];

// Write a function to add a new item to the inventory, updating both arrays.
function addItem(name, quantity){
    inventory.push(name);
    stock.push(quantity);
}

addItem("avocado", 2);
console.log(inventory);
console.log(stock);

// Write a function to update the stock quantity of an existing item.
// function updateStock(name, quantity){
//     let index = indexOf(name);
//     stock [index] = quantity;
// }

// updateStock();


// Write a function to calculate the total number of items in the inventory.
function totalItems(){
    let total = 0;
    for(let i = 0; i < stock.length; i++){
        total += stock[i]
    }
    return total;
}

console.log(totalItems());


// Write a function to find the item with the lowest stock quantity.
function findLowest(){
    let lowest = stock[0];
    let index = 0;
    for(let i = 1; i < stock.length; i++){
        if(stock[i] < lowest){
            lowest = stock[i];
            index = i;
        }
    }
    return  inventory[index];
}
console.log(findLowest());