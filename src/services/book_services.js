const Book_Model = require("../models/Book_Model");


const getAllBook = async()=>{
    try {
        const data =await Book_Model.find({deletedId:0});
    
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

        if(!data){

              return result = {
                success:"false",
                statusCode:400,
                error:"Id Not Found"
            };
        }
          if(data.deletedId !=0){
            return result = {
                success:"false",
                statusCode:400,
                error:"Id Not Found deletedId"
            };
          }

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
        console.log(isExistsBook);
        if(isExistsBook.length>0){
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
        const book = await Book_Model.findById(id)
    if(!book){
     return result = {
            success:"false",
            statusCode:400,
            error:"Id Not Found",
            
        }

    }
    if(book.deletedId !=0){
        return result = {
            success:"false",
            statusCode:400,
            error:"Id Not Found deleted already",
            
        }
    }
       
        await Book_Model.findByIdAndUpdate(id,{
            title:book.title,
            author:book.author,
            deletedId:book._id
        })
        
    return result = { 
        success:"true",
        message:"deleted Successfully",
        statusCode:501,
        
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