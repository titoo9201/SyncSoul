import userModel from '../Models/user.model.js';    

// register user create system
export const createUser= async ({email,password})=>{
    if(!email||!password){
        throw new Error("Email and password are required");
    }

     const hashedpassword= await userModel.hashPassword(password);

    
     const user = await userModel.create({
        email,
        password:hashedpassword
     })

    return user;

}
