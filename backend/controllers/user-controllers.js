import User from "../models/user-model.js"
import bcrypt from 'bcrypt'

export const signup = async(req, res, next) => {
    const {name,email,password} =   req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
       return console.log(err);
    }
    if(existingUser){
        return res
        .status(400)
        .json({message: "User Exists! Login Instead!"});
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = new User({
        email,
        password: hashedPassword,
        name,
    })
    try{
        await user.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({ user})
}

export const login = async(req,res,next) => {
    const {email,password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
       return console.log(err);
    }
    if(!existingUser){
        return res
        .status(404)
        .json({message: "No User With That Email"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if(!isPasswordCorrect) {
        return res
       .status(400)
       .json({message: "Incorrect Password"})
    } return res.status(200).json({message:"Login Successful."})

}