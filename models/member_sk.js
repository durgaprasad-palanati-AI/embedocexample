var mongoose = require('mongoose');// Setup schema
var mempaidschema = mongoose.Schema({

    docname:{type:String},
    payment:[{type:Object}]
    
});
// Export user model
var mempays = module.exports = mongoose.model('ed', mempaidschema,'ed');
module.exports.get = function (callback, limit) {
    mempays.find(callback).limit(limit);
}