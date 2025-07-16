
import express from 'express'
import { adminLogin, approveCoomentById, deleteCoomentById, getAllComments, getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';
import { getAllBlogs } from '../controllers/blogController.js';

const adminRouter= express.Router();

adminRouter.post("/login",adminLogin);
adminRouter.get("/comments",auth,getAllComments);
adminRouter.get("/blogs",auth,getAllBlogs);
adminRouter.post("/delete-comment",auth,deleteCoomentById);
adminRouter.post("/approve-comment",auth,approveCoomentById);
adminRouter.get("/deshboard",auth,getDashboard);






export default adminRouter;