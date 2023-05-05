import User from "../models/user-model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async(req, res, next) => {
    const {name,email,password} =   req.body;
    if (!(name && password && email)) {
        res.status(400).send("All input is required");
      }
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
        email: email.toLowerCase(),
        password: hashedPassword,
        name,
    })
    const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
    try{
        await user.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({ user})

   
}

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        user.token = token;
  
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
}