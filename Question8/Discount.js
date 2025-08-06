const calculateDiscount=(price, customerType, isHoliday)=>{
    let discount;
   // const customerType=['Regular', 'Member', 'VIP']
    if(price<5000){
        console.log("No discount for you!!")
    }
    else if(customerType ==="Regular"){
        discount = price *0.05;
    }

    else if(customerType ==="Member"){
        discount = price *0.1;
    }

    else if(customerType ==="VIP" &&  isHoliday===true){
        discount = price *0.25;
    }
    return discount;
}
console.log(`MWK ${calculateDiscount(6000,"VIP",true)}`)


