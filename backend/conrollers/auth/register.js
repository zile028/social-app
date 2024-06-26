const UserModel = require("../../model/UserModel");
const bcrypt = require("bcryptjs");
const {SALT} = require("../../config/config");
const register = async (req, res, next) => {
    const {email, password, confirmPassword} = req.body;
    try {
        const checkUser = await UserModel.findOne({email});
        if (checkUser) {
            res.status(201).send({msg: "User already exist!"});
        } else {
            if (password === confirmPassword) {
                const hashPassword = await bcrypt.hash(password, SALT);
                const newUser = new UserModel({...req.body, password: hashPassword});
                const saveUser = await newUser.save();
                res.send(saveUser);
            } else {
                res.status(201).send({msg: "Password and confirm password not match!"});
            }
        }
    } catch (error) {
        res.status(415).send({msg: error.message});
    }
};

module.exports = register;