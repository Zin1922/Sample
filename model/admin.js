const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Admin Schema

const AdminSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    accessKey: { type: String, required: true   }
});

AdminSchema.pre('save', function(next) {
    let admin = this;
    if (this.isModified('accessKey') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err){
                return next(err)
            }

            bcrypt.hash(admin.accessKey, salt, null, function(err, hash) {

                if(err){
                    return next(err);
                }

                admin.accessKey = hash;
                next();
            })
        })
    } else{
        return next();
    }
});

AdminSchema.methods.compareaccessKey = function(accessKey) {
    let admin = this;
    let isValid = bcrypt.compareSync(accessKey, admin.accessKey);

    return isValid;
};
module.exports = mongoose.model(`Admin`, AdminSchema);