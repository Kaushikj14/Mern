const {Schema,model} = require('mongoose');
// const { required } = require('../validators/auth-validator');

const contactSchema = new Schema({

    userName:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
});

// create a model or collection

const Contact = new model('Contact',contactSchema);

module.exports = Contact;