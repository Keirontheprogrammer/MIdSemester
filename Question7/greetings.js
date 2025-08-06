// using if statements
console.log("if...else:");
let language="Chichewa";

if (language ==="Chichewa"){
    console.log("Muli bwanji");
}
else if(language ==="Yao"){
    console.log("Muli uli");
}
else if(language ==="Tumbuka"){
    console.log("Muli wuli");
}
else {
    console.log("Hello");
}

//switch//
console.log("\nUsing switch:");
switch (language) {
    case "Chichewa":
        console.log("Muli bwanji");
        break;
    case "Yao":
        console.log("Muli uli");
        break;
    case "Tumbuka":
        console.log("Muli wuli");
        break;
    default:
        console.log("Hello");
        break;
}

