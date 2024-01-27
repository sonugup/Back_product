const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt")
const {UserModel}=require("../Models/User.model");
const dotenv=require("dotenv")
dotenv.config();
const creatRegister=  async (req, res) => {


    const {name, email, pass} = req.body;
    const exstEmail= await UserModel.findOne({email})
    const lPass= await bcrypt.hash(pass, 6)
    if(exstEmail){
        res.json("email already exist")
    }else{
        try {
            const user = new UserModel({name, email, pass:lPass})
            await user.save()
            res.json(user)
        } catch (err) {
            console.log(err)
            res.json("err some")
        }
    }

   

}

const creatLogin=async (req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(pass, user[0].pass,(err, result) => {
                if(result){
                    const token = jwt.sign({ userID: user[0]._id }, process.env.security);
                    res.json({ msg: "Login", token: token })

                }else{
                    res.json("somethig going wrong in hash")
                }
            } )
            
        } else {
            res.json("Wrong Credntials")
        }

    } catch (err) {
        console.log(err)
    }
}

module.exports={
    creatRegister,
    creatLogin
}