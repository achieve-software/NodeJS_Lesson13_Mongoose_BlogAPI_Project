"use strict";

const mongoose = require("mongoose")
const nameSchema = new mongoose.Schema({
// _id: //auto created
// fieldName: String //shorthand using

fieldName:{
    type:String,
    default:null,
    trim:true,
    select:true,
    unıque:false,
    index:false,

}





},{})