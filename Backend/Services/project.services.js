import mongoose from 'mongoose';
import projectModel from '../Models/Project.model.js';    

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