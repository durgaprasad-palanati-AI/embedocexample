var express = require('express')
var app = express()
const bodyParser = require('body-parser');
mempaidschema=require('../models/member_sk')


exports.viewmembers=function (req, res) {
    
   mempaidschema.get(async function (err, members) {
                 if (err) {
                             res.json({
                            status: "error",
                             message: err,
                            });
                        }
                    else
                        {res.json({
                            //payload:req.body,
                             status: "success",
                            message: "members retrieved successfully",
                            data: members
                            });}
                    });  
               
};
exports.viewmembers2=async function (req, res) {
    try{

        var paidmem=await mempaidschema.findOne({})
        //get objects of array
        for(let i=0;i<paidmem.payment.length;i++)
        {
        //console.log("paidmem=",paidmem.payment[i])//get each object
        console.log("paidmem.payment.mon=",paidmem.payment[i].mon)//get property of each object
        console.log("paidmem.payment.paid_all=",paidmem.payment[i].paid_all)//get property of each object
        for(let j=0;j<paidmem.payment[i].paid_all.length;j++){
            console.log("paidmem.payment.mon.mem=",paidmem.payment[i].paid_all[j].mem)//get property of each object
            console.log("paidmem.payment.paid_all.paid=",paidmem.payment[i].paid_all[j].paid)//get property of each object

        }
        }

        res.json({message:"success",paidmem})
    }catch(err)
     {
     console.log(err)
     res.json({message:"internal error"})
     }
 };
//
 exports.viewmembers3=async function (req, res) {
    try{
        const memname=req.body
        console.log("memname=",memname.mem)
        var paidmem=await mempaidschema.findOne({'docname':"mpay"})
        console.log("found doc",paidmem)
        var paydetails=[]
        //get objects of array
        for(let i=0;i<paidmem.payment.length;i++)
        {
        //console.log("paidmem=",paidmem.payment[i])//get each object
        //console.log("paidmem.payment.mon=",paidmem.payment[i].mon)//get property of each object
        //console.log("paidmem.payment.paid_all=",paidmem.payment[i].paid_all)//get property of each object
        for(let j=0;j<paidmem.payment[i].paid_all.length;j++){
            if(paidmem.payment[i].paid_all[j].mem==memname.mem){
                var month=paidmem.payment[i].mon
                var membername=paidmem.payment[i].paid_all[j].mem
                var paiddue=paidmem.payment[i].paid_all[j].paid
            console.log("memeber found")
           /*  console.log("paidmem.payment.mon=",month)//get property of each object
            console.log("paidmem.payment.mon.mem=",membername)//get property of each object
            console.log("paidmem.payment.paid_all.paid=",paiddue)//get property of each object
            */
           console.log("MEMBER %s PAYMENT DETAILS:> FOR MONTH %s IS %s",membername,month,paiddue)
           paydetails.push(membername+' for the '+month+' paid='+paiddue)
         }
            else{
                //console.log("not a member")
               
            } 
        }
        }res.json({message:"completed",data:paydetails}) 
        
    }catch(err)
     {
     console.log(err)
     res.json({message:"internal error"})
     }
 };
 //
 //
 exports.viewmembers4=async function (req, res) {
    try{
        const {mem,month}=req.body
        console.log("memname=",mem,month)
        var paidmem=await mempaidschema.findOne({'docname':"mpay"})
        console.log("found doc",paidmem.payment)
        
        //get objects of array
        for(let i=0;i<paidmem.payment.length;i++)
        {
            if(paidmem.payment[i].mon==month)
            {
                for(let j=0;j<paidmem.payment[i].paid_all.length;j++){
                    if(paidmem.payment[i].paid_all[j].mem==mem){
                        
                       var paiddue=paidmem.payment[i].paid_all[j].paid
            }}
        }
        
    }console.log("MEMBER %s PAYMENT DETAILS:> FOR MONTH %s IS %s",mem,month,paiddue)
    res.json({message:"completed"}) 
        
    }catch(err)
     {
     console.log(err)
     res.json({message:"internal error"})
     }
 };