import { UserPlus } from 'lucide-react';

function AddFriendButton() {
    return <>
        <div className="border-2 rounded-full w-1/4 border-violet-200 flex justify-center items-center hover:bg-amber-50 hover:cursor-pointer">
            <UserPlus size="15"/>
        </div>
    </>
}

export default AddFriendButton;