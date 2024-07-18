
const bookService = require('../services/book_services')
const Book_Model = require('../models/Book_Model');

const getAllBook =async (req,res)=>{

    
    const data = await bookService.getAllBook()

    res.status(data.statusCode).json(data)
   

}

const getBookById =async (req,res)=>{
    const {id} = req.params

    const result = await bookService.getBookById(id)

    res.status(result.statusCode).json({result})
   

}

const createBook = async(req,res)=>{
    

  
        const {title,author} = req.body;

        const result = await bookService.createBook(title,author)

        res.status(result.statusCode).json({result})

   

   
}

const deleteBookById = async(req,res)=>{
    const {id} = req.params

    const result =await bookService.deleteBookById(id)
    
    res.status( result.statusCode).json({result})


}

const updateBookById = async(req,res)=>{
    const {id} = req.params
    const {title,author} = req.body
    try {

        const data =await Book_Model.findById(id);
        if(!data){
            res.status(400).json({
                success:"false",
                error:"Id Not Found"
            });   
        }
       
        const newData = {
            title:title || data.title,
            author:author || data.author
        }
      const updatedData =  await Book_Model.findByIdAndUpdate(id,newData,{new:true})
        res.status(200).json({
            success:"true",
            message:"Updated Successfully",
            data:updatedData
        })

    } catch (error) {
        res.status(400).json({
            success:"false",
            error:error
        }); 
    }
}

module.exports = {
    getAllBook,
    getBookById,
    createBook,
    deleteBookById,
    updateBookById
}