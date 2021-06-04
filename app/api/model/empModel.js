const mongoose = require('mongoose')
mongoose.pluralize(null)

 //ObjectId = mongoose.Schema.ObjectId;

var Schema = mongoose.Schema;

var empSchema = new Schema({
     lawn:[lawnSchema],
     chantelle:[chantelleSchema],
     swiss:[swissSchema],
     fuchsia:[fuchsiaSchema]
    
     
});
var lawnSchema = new Schema({
     Size:String,
     pieces:Number,
     fabric_type:String,
     prices:Number
});
var chantelleSchema = new Schema({
     Size:String,
     pieces:Number,
     fabric_type:String,
     prices:Number
});
var swissSchema = new Schema({
     Size:String,
     pieces:Number,
     fabric_type:String,
     prices:Number
})
var fuchsiaSchema = new Schema({
     Size:String,
     pieces:Number,
     fabric_type:String,
     prices:Number
})

var employee  = mongoose.model('collections',empSchema)
module.exports = employee
















/POST schema

var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var Post = mongoose.model("Post", postSchema);

//USER schema

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [
            {
                 type: mongoose.Schema.Types.ObjectID,   
                 ref: "Post"
            }
         ]
});

var User = mongoose.model("User", userSchema);
