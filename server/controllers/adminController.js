import jwt from 'jsonwebtoken';


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
     res.json({status:400 ,success:false, message: err.message })
      
   }
}