import mongoose from 'mongoose';
import projectModel from '../Models/Project.model.js';    
import { u } from 'framer-motion/client';

// create project service

export const createProject = async ({name,userId}) =>{
    if(!name||!userId){
        throw new Error("Project name and userId are required");
    }
    let project ;
    try{
        project = await projectModel.create({name
            ,users:[userId]}
        );
    }
    catch(error){
        if(error.code===11000){
            throw new Error("Project with this name already exists");
        }
        throw error;
    }
    return project;
}

export const getAllProjectByUserId = async ({userId}) =>{
    if(!userId){
        throw new Error("userId is required");
    }  
    const allUserProjects = await projectModel.find({users:userId});
    return allUserProjects;
}

export const addUserToProject = async({projectId,users,userId})=>{
    if(!projectId)
    {
        throw new Error("projectId is required");
    }
    if(! new mongoose.Types.ObjectId.isValid(projectId)){
        throw new Error("Invalid projectId");
    }
    if(!users){
        throw new Error("users array is required");
    }

    if(!Array.isArray(users)||users.some(userId=> !new mongoose.Types.ObjectId.isValid(userId))){
        throw new Error("Invalid users array");
    }
     if(!userId){
        throw new Error("userId is required");
    }
    if(! new mongoose.Types.ObjectId.isValid(userId)){
        throw new Error("Invalid userId");
    }
  

    const project= await projectModel.findOne({_id:projectId,
        users: userId 
    });
    if(!project){
        throw new Error("user is not belongs to this project");
    }

    const updatedProject = await projectModel.findOneAndUpdate(
        {_id:projectId},
        {$addToSet:{users:{$each:users}}},
        {new:true}
    );
    return updatedProject;

   
}

export const getProjectById= async({projectId})=>{
    if(!projectId)
    {
        throw new Error("projectId is required");

    }
    if(! new mongoose.Types.ObjectId.isValid(projectId)){
        throw new Error("Invalid projectId");
    }
    const project= await projectModel.findOne({_id:projectId}).populate('users');
    return project;

  

}