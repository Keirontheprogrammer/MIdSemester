// using literal objects //
const order ={
    OrderId: "ORD-2025-00456",
    author: {
        userId:"CUST-1001",
        name: "John Doe",
        email: "john.doe@gmail.com",
    },
    address:{
        street:"45 Independennce Drive",
        city: "Lilongwe",
        country: "Malawi",
        postalcode: 265,
    },
    items: [
    { productId: "P-001", name: "Wireless Mouse", quantity: 2, price: 7500 },
    { productId: "P-002", name: "Mechanical keyboard", quantity: 1, price: 25500}
  ],
  payment:{
        method:"mobile money",
        phone: "0999123456",
        transacctionId: "TXN-900123",
        success: true,
    },
  delivery:{
        method:"Courier",
        status: "In Transit",
        estimatedDelivery: "2025-08-10",
        success: true,
    },
  discountCodes: ["NEWUSER10", "FREESHIP"],
  OrderTotal: 40500,
  createdAt: "2025-08-04T14:25:00Z",
  updatedAt: "2025-08-05T09:00:00Z",
};

// using class objects//

class orderclass{
    constructor(orderID, customer, address, items, payment, delivery, discountCodes, OrderTotal, createdAt,updatedAt){
        this.orderID=orderID;
        this.customer=customer;
        this.address=address;
        this.items=items;
        this.payment=payment;
        this.delivery=delivery;
        this.discountCodes=discountCodes;
        this.OrderTotal=OrderTotal;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt
    }  
}

const orderobj = new orderclass( 
     "ORD-2025-00456",
    {
        userId:"CUST-1001",
        name: "John Doe",
        email: "john.doe@gmail.com",
    },
    {
        street:"45 Independennce Drive",
        city: "Lilongwe",
        country: "Malawi",
        postalcode: 265,
    },
    [
    { productId: "P-001", name: "Wireless Mouse", quantity: 2, price: 7500 },
    { productId: "P-002", name: "Mechanical keyboard", quantity: 1, price: 25500}
  ],
  {
        method:"mobile money",
        phone: "0999123456",
        transacctionId: "TXN-900123",
        success: true,
    },
  {
        method:"Courier",
        status: "In Transit",
        estimatedDelivery: "2025-08-10",
        success: true,
    },
   ["NEWUSER10", "FREESHIP"],
     40500,
    "2025-08-04T14:25:00Z",
    "2025-08-05T09:00:00Z",
);

// using function constructor//
function functionconstructor(orderID, customer, address, items, payment, delivery, discountCodes, OrderTotal, createdAt,updatedAt){
        
        this.orderID=orderID;
        this.customer=customer;
        this.address=address;
        this.items=items;
        this.payment=payment;
        this.delivery=delivery;
        this.discountCodes=discountCodes;
        this.OrderTotal=OrderTotal;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt

const objectFC=new functionconstructor("ORD-2025-00456",
    {
        userId:"CUST-1001",
        name: "John Doe",
        email: "john.doe@gmail.com",
    },
    {
        street:"45 Independennce Drive",
        city: "Lilongwe",
        country: "Malawi",
        postalcode: 265,
    },
    [
    { productId: "P-001", name: "Wireless Mouse", quantity: 2, price: 7500 },
    { productId: "P-002", name: "Mechanical keyboard", quantity: 1, price: 25500}
  ],
  {
        method:"mobile money",
        phone: "0999123456",
        transacctionId: "TXN-900123",
        success: true,
    },
  {
        method:"Courier",
        status: "In Transit",
        estimatedDelivery: "2025-08-10",
        success: true,
    },
   ["NEWUSER10", "FREESHIP"],
     40500,
    "2025-08-04T14:25:00Z",
    "2025-08-05T09:00:00Z",

);
}
orderobj.items.push("P-003","Flash-disk",2,100);
orderobj.payment.transacctionId("mobile money","0888123456","TXN-900456",false)


const StringJson= JSON.stringify(post);~
console.log(StringJson);

const parsed = JSON.parse(StringJson);
console.log(parsed);