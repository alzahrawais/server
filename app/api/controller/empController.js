const empModel =require('../model/empModel')

module.exports={

create:function(re,res){


    empModel.create(req.body,function(err,res){
        if(!err){
            res.send("user added successfully")
        }else{res.send("something wrong"+err)}
    })
}



}