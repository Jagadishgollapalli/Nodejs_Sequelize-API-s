const res = require("express/lib/response");
const models = require("../models");
const Order = require("../models").order;

//----------------------------------------------------------------------------------------

module.exports = {
     async createOrder(){
          try{
               const details = await models.order.create({
                    ItemName: 'Charger', ItemPrice: '200', ItemId:"23456"
               });
               console.log( details );
          }
          catch(err){
               console.log(err);
          }
     }
}

//----------------------------------------------------------------------------------------

// module.exports = {
//      async updateOrder(){
//           try{
//                const updations = await models.Order.update({
//                     ItemName: 'Charger', ItemPrice: '200', ItemId:"23456"
//                },
//                { where: { id: 3 }}
//                );
//                console.log( updations );
//           }
//           catch(err){
//                console.log(err);
//           }
//      }
// }

 //----------------------------------------------------------------------------------------


// module.exports = {
//      async deleteOrder(){
//           try{
//                const deleteUser = await models.Order.destroy(
//                { 
//                     where: { id: 3 }
//                }
//              );
//                console.log( deleteUser );
//           }
//           catch(err){
//                console.log(err);
//           }
//      }
// }

//----------------------------------------------------------------------------------------


// module.exports = {
//      async getAllOrders(){
//           try{
//                const findUser = await models.Order.findAll(
//                { 
//                     where: { id: 4}
//                }
//              );
//                console.log( findUser );
//           }
//           catch(err){
//                console.log(err);
//           }
//      }
// }
