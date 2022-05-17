const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


//Admin Schema
/*
const UserSchema = new Schema({
    Name: String,
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true },
});

UserSchema.pre('save', function(next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err){
                return next(err)
            }
            bcrypt.hash(user.password, salt, null, function(err, hash){
                if(err){
                    return hash(err);
                }

                user.password = hash;
                next();
            })
        })
    } else {
        return next();
    }
}); */

const UserSchema = new Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true}
});

UserSchema.pre('save', function(next) {
    let user = this;
    if(this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if(err){
                return next(err)
            }

            bcrypt.hash(user.password, salt, null, function(err, hash) {
                if(err){
                    return hash(err)
                }

                user.password = hash;
                next();
            })
        })
    }else{
        return next();
    }
});

UserSchema.methods.comparePassword = function(password) {
    let user = this;
    let isValid = bcrypt.compareSync(password, user.password);

    return isValid;
};  

module.exports = mongoose.model(`User`, UserSchema);