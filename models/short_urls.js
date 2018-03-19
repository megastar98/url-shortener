import { mongo } from 'mongoose';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    id:{
        type:Number,
        required:true
    },
    long_url:{
        type:String,
        required:true
    },
    date_added:{
        type:Date,
        required: true
    }
})