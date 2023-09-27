import User from '../models/user.js';

export const getAllUsers = async (req, res)=>{
    //It will fetch the data from database asynchronously
    console.log(req.query);
    const users = await User.find();

    //Send the receieved data as response in the from of JSON.
    res.json({
        success: true,
        users: users,
    });
}

export const createUser = async (req, res)=>{
    const {name, email, password} = req.body;
    await User.create({
        name,           
        email,
        password,
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully."
    });
}

export const getUserById = async (req, res)=>{
    const { id } = req.params;
    console.log(req.params);

    res.json({
        success: true,
        id
    });
}