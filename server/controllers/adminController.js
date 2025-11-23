import jwt from 'jsonwebtoken';
import Blog from '../models/Blog.js';
import Comment from '../models/blogCntroller.js';


export const adminLogin= async(req,res)=>
{
   try{
        const {email,password}= req.body; // body me dada rhta tahe
        if(email!=process.env.EMAIL_ID || password!=process.env.PASSWORD)
        { 
            return res.json({status:400,success:false,message:"Invalid Credentials"})
 
        } 

        const token=jwt.sign({email},process.env.SECRET_KEY);
             res.json({status:200,success:true,token});
         
   }
   catch (err){
     
      
   }
}


export const getAllBlogsAdmin= async(req,res)=>
{
  try {

    const blogs=await Blog.find({}).sort({createdAt:-1})
    res.json({success:true,blogs})
    
  } catch (error) {
     res.json({status:400 ,success:false, message: error.message })
    
  }
}


export const getAllComments= async(req,res)=>
{
  try {
    const comments=await Comment.find({}).populate("blog").sort
    ({creatwAt:-1})
    res.json({success:true,comments})
    
    
  } catch (error) {
    
     res.json({status:400 ,success:false, message: error.message })

  }
  
}

 
 // ✅ Make sure this is correct

export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);

    const blogs = await Blog.countDocuments();
    const comments = await Comment.countDocuments(); // ✅ fixed spelling
    const drafts = await Blog.countDocuments({ isPublished: false });

    const dashboardData = {
      blogs,
      comments,
      drafts,
      recentBlogs,
    };

    res.json({ success: true, dashboardData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};





export const deleteCoomentById=async (req,res)=>{
    try {
        const {id}=req.body;
        await Comment.findByIdAndDelete(id);
        res.json({success:true,message:"comment deleted successfully"})
        
    } catch (error) {
        
        res.json({success:false,message:error.message});

    }
}



export const approveCoomentById=async (req,res)=>{
    try {
        const {id}=req.body;
        await Comment.findByIdAndUpdate(id,{isApproved:true});
        res.json({success:true,message:"comment approved successfully"})
        
    } catch (error) {
        
        res.json({success:false,message:error.message});

    }
}