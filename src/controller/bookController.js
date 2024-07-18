

const Book_Model = require('../models/Book_Model');

const getAllBook =async (req,res)=>{
    
    try {
    const data =await Book_Model.find({});

    res.status(200).json({
        success:"true",
        data:data
    })

    } catch (error) {
        res.status(400).json({
            success:"false",
            error:error.message
        })
    }

}

const getBookById =async (req,res)=>{
    const {id} = req.params
    try {
        const data  = await Book_Model.findById(id);
        if(!data)
            res.status(400).json({
                success:"false",
                error:"Id Not Found"
            });

            res.status(200).json({
                success:"true",
                data:data
            })

            
            
    } catch (error) {
        res.status(400).json({
            success:"false",
            error:error.message
        })
    }

}

const createBook = async(req,res)=>{
    

    try {
        const {title,author} = req.body

        if(title==""||author==""||!title || !author){
            res.status(400).json({
                success:"false",
                error:"Full Filed all pleasse "
            });
        }    
        const isExistsBook = await Book_Model.find({title});
        if(isExistsBook){
            res.status(400).json({
                success:"false",
                error:"Book already exists "
            });
        }
         await Book_Model.create({
            title,
            author
        })
        res.status(201).json({
            success:"true",
            message:"Created Successfully",
        })

    } catch (error) {
        
    }
}

const deleteBookById = async(req,res)=>{
    const {id} = req.params
    try {
            const data =await Book_Model.findByIdAndDelete(id);
        if(!data){
            res.status(400).json({
                success:"false",
                error:"Deleted Failed"
            });

        }

        res.status(501).json({
            success:"true",
            message:"deleted Successfully",
            data:data
        })

        
    } catch (error) {
        res.status(400).json({
            success:"false",
            error:error.message
        });
    }


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