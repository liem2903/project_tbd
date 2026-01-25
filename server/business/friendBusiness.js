
import { getFriendsData, postFriendRequestData, setFriendRequestData, getFriendRequestsData, deleteFriendRequestData, createFriend, isFriendedData } from '../data_access/friendRepository.js'
import { getUserName } from '../data_access/userRepository.js';

export async function getFriendsBusiness(user_id) {
    try {        
        const id = await getFriendsData(user_id);

        const friendNames = await Promise.all(id.map(async (user) => {
            let friends = await getUserName(user.friend_id);

            return {
                name: friends.name,
                id: user.friend_id,
            }
        }));

        return friendNames;
    } catch (err) {
        throw new Error("Error in data-base");
    }
}

export async function postFriendRequestBusiness(user_id, code) {
    let isFriended = await isFriendedData(user_id, code);

    if (isFriended.exists) {
        throw new Error(isFriended.message);
    }

    return postFriendRequestData(user_id, code);
}

export async function setFriendRequestBusiness(status, id, friend, current_user) {
    try {
        setFriendRequestData(status, id);

        if (status == "Accepted") {
            let friend_name = await getUserName(friend); 
            let user_name = await getUserName(current_user);

            createFriend(friend, current_user, friend_name.name);
            createFriend(current_user, friend, user_name.name)
        }
    } catch (err) {
        console.log("ERROR IN DATABASE");
    }
}

export async function getFriendRequestsBusiness(user_id) {
    try {
        let friendRequests = await getFriendRequestsData(user_id);
        let final_requests = await Promise.all(friendRequests.map( async (value) => {
            let userName = (await getUserName(value.from_user)).name;

            return {
                from_user: value.from_user,
                to_user: value.to_user,
                status: value.status,
                id: value.id,
                requester_name: userName
            }
        }));

        return final_requests;
    } catch (err) {
        throw new Error("Error in data-base");
    }
}