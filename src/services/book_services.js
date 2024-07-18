const Book_Model = require("../models/Book_Model");


const getAllBook = async()=>{
    try {
        const data =await Book_Model.find({});
    
       return result = {
        success:true,
        statusCode:200,
        data,
        

       }
    
        } catch (error) {
            return result={
                success:"false",
                statusCode:400,
                error:error.message
            }
        }
}


const getBookById = async (id)=>{


    try {
        const data  = await Book_Model.findById(id);
        if(!data)
            return result = {
                success:"false",
                statusCode:400,
                error:"Id Not Found"
            };

            return result={
                success:"true",
                data:data,
                statusCode:200
            }

            
            
    } catch (error) {
       return result={
            success:"false",
            error:error.message,
            statusCode:402
        }
    }
}

const createBook = async ()=>{


}
module.exports = {
    getAllBook,
    getBookById,
    createBook

}