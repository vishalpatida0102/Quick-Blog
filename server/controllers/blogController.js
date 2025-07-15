import fs from 'fs'
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
export const addBlog=async(req,res)=>
{
    try{
        
        const {title,subTitle,description,category,isPublished}=JSON.parse(req.body.blog);
        //parse json string to key value pair me stor kr ke rkh ta he 

        const imageFile=req.file; // image body ke andar nhi rhti he ise alg se extract krna pdata he 

        //check if all fileds are present

        if(!title || !description || !category || !imagekit)
        {
            return res.json({success:false,message:"Missing required fields"})
        }

        const fileBuffer=fs.readFileSync(imageFile.path)

        // upload image to imagekit
        // ye apni image ko cloud pr dal rha he 
        //jis se hm easly tranformation kr paye

        const response=await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
        })

        // transform the image
        // ue gunction optimize URL return karga 

        const optimizedImageUrl=imagekit.url({
            path:response.filePath,
            transformation:[
                {quality:'auto'},// auto compression
                {format:'webp'},// convert to modern format
                {width:'1280'}  // width resizing
            ]
        });

        const image=optimizedImageUrl;
 
        //data add in schema/model
        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image,
            isPublished
        })

        res.json({success:true,message:"Blog added successfully"})
    }catch(err)
    {
         res.json({success:false,message:err.message});
    }
}


export const getAllBlogs = async(req,res)=>
{
    try {
         
        const blog= await Blog.find({isPublished:true});

        res.json({success:true, blog})

    } catch (error) {
        
        res.json({success:false,message:error.message});
    }
}


export const getBlogById=async(req,res)=>
{
    try {
        const {blogId}=req.params;
        const blog =await Blog.findById(blogId)
        if(!blog){
            return res.json({success:false, message:"Blog not found"});
        }

        res.json({success:true,blog});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export const deleteBlogById=async(req,res)=>
{
    try {
        const {id}=req.body;
        await Blog.findByIdAndDelete(id);

        res.json({success:true,message:'Blog deleted successfully'});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}


export const togglePublish=async(req,res)=>
{
    try {
        const {id}=req.body;
        const blog=await Blog.findById(id);
        if (!blog) {
  return res.json({ success: false, message: "Blog not found" });
}


        blog.isPublished=!blog.isPublished;
        await blog.save();
         res.json({success:true,message:'Blog Status Updated'});
 
        
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}



export const addComment=async(req,res)=>
{
    try {
        
        const {blog,name,content}=req.body;
        await Comment.create({blog,name,content});
        res.json({success:true,message:'Comment added for review'})

        
    } catch (error) {
        
        res.json({success:false,message:error.message});

    }
}


export const getBlogComments=async(req,res)=>
{

     try {
        
        const {blogId}=req.body;
        const comments=await Comment.find({blog:blogId,isApproved:true}).sort
     ({createdAt:-1});
     res.json({success:true,comments})

     } catch (error) {
        res.json({success:false,message:error.message});
        
     }
}