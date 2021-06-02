const mongoose = require('mongoose')
mongoose.pluralize(null)


var Schema = mongoose.Schema;

var empSchema = new Schema({
     name:{type:String,required:true,unique:true},
     fname:{type:String,required:true,unique:true},
     model_number:String
     
})
var employee  = mongoose.model('gg',empSchema)
module.exports = employee