const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Baroque', {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
if(!err)
{
    console.log("Connection succeeded")
}
else
{
    console.log("Connection failed" + err)
}
});