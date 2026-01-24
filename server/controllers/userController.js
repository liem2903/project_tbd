import {
     getFriendCodeBusiness,
    } from "../business/userBusiness.js";
import dotenv from 'dotenv';
dotenv.config();

export async function getFriendCode(req, res) {
    try {
        let user_id = req.user.user_id;
        let code = await getFriendCodeBusiness(user_id);
        res.status(200).json({status: true, data: code})
    } catch (err) {
        res.status(400).json({status: false})
    }
}