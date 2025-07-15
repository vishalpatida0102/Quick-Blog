import jwt from 'jsonwebtoken'

const auth=(req,res,next)=>
{
    const token=req.headers.authorization;

    try
    {
        jwt.verify(token,process.env.SECRET_KEY);
        next();
    }
    catch(err)
    {
     res.json({success:false, message:"invalid Token"});
    }
}

export default auth;