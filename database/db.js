const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/awais', {useNewUrlParser: true, useUnifiedTopology: true},
function(error){
    if(!error)
    {
        console.log("mongodb connection successed")
    }
    else
    {
        console.log("mongodb connection failed" +err)
    }
});
