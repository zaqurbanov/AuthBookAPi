require('dotenv').config();


module.exports={
    PORT:process.env.PORT,
    MONGO_PATH:process.env.MONGO_PATH,
    JWT_SECRET:process.env.JWT_SECRET
}