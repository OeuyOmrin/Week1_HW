let x = 14;

if(x%3 === 0 && x%5 === 0){
    console.log("the number is divisable by 3 and 5.");
} else if(x%3 === 0){
    console.log("the number is divisable by 3.");
} else if(x%5 === 0){
    console.log("the number is divisable by 3.");
} else if(x%3 !== 0 && x%5 !== 0){
    console.log("the number is not divisable by 3 or 5.");
}

let day = "Sunday";

if(day === "Saturday " || day === "Sunday"){
    console.log("It is a weekend.");
}else{
    console.log("It is a weekday.");
}

let light = "Red"; 

if(light === "Red"){
    console.log("Stop");
}else if(light === "Yellow"){
    console.log("Get ready to stop");
}else if(light === "Green"){
    console.log("Go");
}   else {
    console.log("Invalid traffic light color");
}