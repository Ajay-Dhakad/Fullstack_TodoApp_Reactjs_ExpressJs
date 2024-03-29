
// import jwt from 'jsonwebtoken'
import { verifyToken } from '../utils/TokenGenerators.js'
import {User} from '../models/userModel.js'

export default async function userAuth(req,res,next) {

    const token = req.headers?.authorization?.split(' ')[1]
    // console.log(token)
    
    if (!token) {
       return res.status(401).json({ error: "Access token is required to get the access" })}

    const {_id} = verifyToken(token)

    if (!_id){
        return res.status(401).json({ error: "Token is Not Valid -Expired" })
    }

    const user =await User.findById(_id).select('_id')

    if (!user){
        return res.status(401).json({ error: "You are not authorized to view this resource." })
    }

    console.log(user)

    req.user = user


    next()

}