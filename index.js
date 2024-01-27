const express = require("express");
const db = require("./config/db")
const { userRouter } = require("./router/user.router");
const { productRouter } = require("./router/product.router");
const dotenv = require("dotenv")

dotenv.config()

const cors = require("cors")


const app = express();
app.use(cors({
    origin: "*"
}))

app.use(express.json());


app.get("/", (req, res) => {

    res.json("Welcome")
})

app.use("/user", userRouter)

app.use("/product", productRouter)



app.listen(process.env.PORT, async () => {
    try {
        await db
        console.log("db connection")
    } catch (err) {
        throw err
    }
    console.log("server run ")
})



