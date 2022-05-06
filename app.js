var express = require("express")
var models = require("./models")
const app = express();


models.sequelize.sync({force: true})
.then(()=>{
    console.log("db works fine")
})
.catch((err)=>{
    console.log(err,"somthing went wrong with DB")
})


require('./routes')(app)

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server listening on port  ${PORT}`)
})