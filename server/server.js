import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js'; //complete file with extention
import adminRouter from './routes/adminRouter.js';


//3.52 minute se start

const app=express(); // use express and male app 
//aapke poore Express server ka main controller hai, jisse aap server ki saari settings, routes, aur middleware handle karte ho by the help of use().

await connectDB() // data base connect krne ke liye 

// middleware ka use


// sb file me middleware me bhej na padti he

// use() ye hme madad krta he middleware apply krne ke liye hmare server, jse express.json ,cors is
//middleware he jisse hme use krna he to use use me bhe do as parameter
app.use(cors());
app.use(express.json()) // use for convert use data into json and access req.body

const PORT=process.env.PORT || 3000;

app.get('/' ,(req,res)=>res.send('API is Working...'))
app.use('/api/admin',adminRouter);

app.listen(PORT,()=>{ //listen ka matlab hai server ko start karna aur clients ki requests sunna.
    console.log('sever is running on port ' + PORT)
})

export default app;