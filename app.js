const express = require('express');
const { PORT, MONGO_PATH } = require('./src/config/env');
const Mongo = require('./src/config/db');

const app = express();

app.use(express.json())
const BooksRouter = require('./src/routes/bookRoutes');
const authRouter = require('./src/routes/authRouter');
const authMiddle = require('./src/middleware/authMIddleware');

Mongo.connect(MONGO_PATH);

app.use('/book',authMiddle,BooksRouter)
app.use('/auth',authRouter)


app.listen(PORT,()=>{
    try {
        console.log(`Server listening on port ${PORT}`);
        
    } catch (error) {
    console.log(error.message);        
    }
})