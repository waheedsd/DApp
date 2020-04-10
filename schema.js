const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    username:{
        type: String,
        required:[true,'Username is required']
    },
    created:{
        type:Date,
        required:[true, 'Created Date is required']
    }
})
module.exports = userschema