const OrderDetails = require('../controllers/set_order_details');
const CustomerDetails = require('../controllers/set_customer_details');


module.exports = app =>{

    //users routes
    app.post("/order_details", OrderDetails.createOrder);
    //app.put("/updateOrder/:id", OrderDetails.updateOrder);
    // app.delete("/deleteOrder",OrderDetails.deleteOrder);
    // app.get("/getOrders",OrderDetails.getAllOrders)

    //customer routes
    app.post("/customer_details", CustomerDetails.createCustomer)
}
