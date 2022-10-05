const mongoose = require('mongoose');
const ROLES = require('../config/roles')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    roll:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: [ROLES.ADMIN, ROLES.USER, ROLES.ICO, ROLES.PCO],
        default: ROLES.USER
    },
    isPlaced:{
        type: Boolean,
        default:false
    },
    isIntern:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('User', userSchema);