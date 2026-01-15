
import projectModel from '../Models/Project.model.js';
import userModel from '../Models/user.model.js';
import * as projectServices from '../Services/project.services.js';
import {validationResult} from 'express-validator';



export const createProjectController= async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }   
    try {
         const {name}=req.body;
    const loggedInUser= await userModel.findOne({email:req.user.email});
    const userId=loggedInUser._id;
    const newProject = await projectServices.createProject({name,userId});
    res.status(201).json({newProject});
    }

    catch (error) {
        res.status(400).json({error:error.message});
    }
}

export const getAllProjectsController = async(req,res)=>{
    try{
         if (!req.user?.email) {
            return res.status(400).json({ message: "Invalid token data" });
        }

        const loggedInUser= await userModel.findOne({email:req.user.email});
        if (!loggedInUser) return res.status(404).json({ message: "User not found" });
        const allUserProjects= await projectServices.getAllProjectByUserId({userId:loggedInUser._id});
        res.status(200).json({
            projects:allUserProjects
        });
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:err.message})
        
    }
}

export const addUserToProjectController= async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        const {projectId,users}=req.body;
        const loggedInUser= await userModel.findOne({email:req.user.email});

        const project =await projectServices.addUserToProject({
            projectId,
            users,
            userId:loggedInUser._id
        });
        res.status(200).json({project} );
       
    }
    catch(err){
        res.status(400).json({error:err.message});
    }   
}

export const getProjectByIdController= async(req,res)=>{
     const {projectId}=req.params;
    try{
        const project = await projectServices.getProjectById({projectId});
        return res.status(200).json({project})

    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}
