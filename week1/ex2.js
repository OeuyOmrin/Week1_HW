var array = ["Milk", "Bread", "Apple"]
array.length; 
console.log("The length of the array is: " + array.length);

array[1] = "Banana";
for(var i = 0; i < 3; i++){
    console.log("Item " + (i + 1) + ": " + array[i]);
}

