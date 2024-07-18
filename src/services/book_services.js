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

const createBook = async (title,author)=>{

    try {
        

        if(title==""||author==""||!title || !author){
           return result= {
                success:"false",
                statusCode:400,
                error:"Full Filed all pleasse "
            };
        }    
        const isExistsBook = await Book_Model.find({title});
        if(isExistsBook){
            return result={
                success:"false",
                statusCode:400,
                error:"Book already exists "
            };
        }
         await Book_Model.create({
            title,
            author
        })
        return result={
            success:"true",
            statusCode:201,
            message:"Created Successfully",
        }
    

    } catch (error) {
        return result={
            success:"false",
            statusCode:400,
            error:error.message
        };
    }
   
}

const deleteBookById = async(id)=>{
    try {
        const data =await Book_Model.findByIdAndDelete(id);
    if(!data){
     return result = {
            success:"false",
            statusCode:400,
            error:"Deleted Failed",
            
        }

    }

    return result = {
        success:"true",
        message:"deleted Successfully",
        statusCode:200,
        data:data
    }

    
} catch (error) {
    return result = {
        success:"false",
        statusCode:400,
        error:error.message
    }
}
}
module.exports = {
    getAllBook,
    getBookById,
    createBook,
    deleteBookById,


}