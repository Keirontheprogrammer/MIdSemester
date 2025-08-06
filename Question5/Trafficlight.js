// using if statements
console.log("if...else:");
let color="red";

if (color ==="red"){
    console.log("stop");
}
else if(color ==="yellow"){
    console.log("get ready");
}
else if(color ==="green"){
    console.log("go");
}

//switch//
console.log("\nUsing switch:");
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("get ready");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("system error");
        break;
}

