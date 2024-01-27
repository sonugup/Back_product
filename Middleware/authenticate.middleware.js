const jwt=require("jsonwebtoken");


const authanticate=(req, res, next) => {
    const token=req.headers.authorization

    if(token){
        const decoded=jwt.verify(token, process.env.security)
        if(decoded){
            const userID=decoded.userID
            console.log(decoded)
            req.body.userID=userID
            next()
        }else{
            res.json({msg:"please Login First"})
        }
    }else{
        res.json({msg:"plz login first"})
    }
}


module.exports={
    authanticate
}


// {
//     "title":"Product1 title",
//     "img":"get the image",
//     "desc":"Product is best",
//     "price":45
// }