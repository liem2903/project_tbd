import {
    getFriendCodeRepository
 } from "../data_access/userRepository.js";

import dotenv from 'dotenv';
dotenv.config();

export function getFriendCodeBusiness(user_id) {
    try {
        return getFriendCodeRepository(user_id);
    } catch (err) {
        throw new Error(err.message);
    }
}
 
