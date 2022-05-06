const res = require("express/lib/response");
const models = require("../models");
const Customer = require("../models").customer;

//----------------------------------------------------------------------------------------

module.exports = {
     async createCustomer(){
          try{
               const details = await models.customer.create({
                    firstName: 'phanindra', lastName: 'banti', address:"kakinada", mobile:"9019200950"
               });
               console.log( details );
          }
          catch(err){
               console.log(err);
          }
     }
}
