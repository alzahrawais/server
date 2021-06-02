// // import { parse } from 'node-html-parser';

// // const root = parse('<ul id="list"><li>Hello World</li></ul>');

// // console.log(root.firstChild.structure);
// // // ul#list
// // //   li
// // //     #text

// // console.log(root.querySelector('#list'));
// // // { tagName: 'ul',
// // //   rawAttrs: 'id="list"',
// // //   childNodes:
// // //    [ { tagName: 'li',
// // //        rawAttrs: '',
// // //        childNodes: [Object],
// // //        classNames: [] } ],
// // //   id: 'list',
// // //   classNames: [] }
// // console.log(root.toString());
// // // <ul id="list"><li>Hello World</li></ul>
// // root.set_content('<li>Hello World</li>');
// // root.toString();	// <li>Hello World</li>

//  document.getElementById('para').innerHTML="Hello";
// console.log("result");

// const express = require('express')
// const app = express()
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

//  require('./database/db')
 
// const mongoose = require('mongoose')
// mongoose.pluralize(null)

// var Schema = mongoose.Schema;

// var empSchema = new Schema({
//     Name:{type:String, required:true, unique:true},
//     fname:{type:String, required:true, unique:true},
//     location: String,
// })

// var employee = mongoose.model('Employee', empSchema)

// module.exports = employee;

// //post api 

// app.post('/postEmp',function(req,res){
//     var empData = new employee(req.body);
//        console.log(empData);
//        empData.save()
//        .then(item => {
//         res.send("item saved to database");
//         })
//         .catch(err => { 
//          res.status(400).send("unable to save to database"+err);
//         });
//     });


// //get api 

// app.get("/getEmployee",function(req,res){
    
//     employee.find(function(err, result){
//         // document.getElementById('employeeData').innerHTML=`<li>${employee.Name} , ${employee.fname} and ${employee.location} </li>`
            
//         if(!err)
//         {
//             res.send(result)
//         }
//         else
//         {
//             res.send("something is wrong !!!" +err )
//         }
//     })
// })

// app.get("/:id",function(req,res){
    
//     employee.findById({_id:req.params.id},function(err, result){
//         if(!err)
//         {
//             res.send(result)
//         }
//         else
//         {
//             res.send("something is wrong !!!" +err )
//         }
//     })
// })












// // writing in the html

//              //document.getElementById('employeeData').innerHTML=`<li>${employee.name} , ${employee.fname} and ${employee.location} </li>`;   


// // update employee

// app.put("/updateEmployee/:id",async(req,res)=>{

// var emp = await employee.findByIdAndUpdate({
//     _id:req.params.id
// },req.body,{
//     new:true
// }).then(data=>{
//     res.send(data)
// }).catch(err=>{
//     res.send("error ha" +err)
// })
// })
//  //delet by id

// app.delete("/deleteEmployee/:id",async(req,res)=>{

// var emp = await employee.findByIdAndDelete({
//     _id:req.params.id
// }).then(data=>{
//     res.send("your data successfully delete")
// }).catch(err=>{
//     res.send("error ha" +err)
// })
// })


// // app.listen(1212,()=>{
// //     console.log("your server running on 1212 port")
// // })