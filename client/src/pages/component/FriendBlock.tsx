// Changes colour based on how long ago.

// 1- 1 week --> GREEN
// 1 week - 1 month --> YELLOW
// Any longer is RED

type prop = {
    name: string,
    last_seen: string
}

function FriendBlock({name, last_seen}: prop) {
    return <>
        <div className="w-4/5 h-1/11 ml-5 mr-5 flex flex-col items-center bg-violet-200 border-2 border-red-200">    
            <div className="flex relative"> <div className="text-xl"> {name} </div>  <div className="bg-red-200 min-w-[1.5vw] min-h-[3vh] rounded-full border-red-200 border-2 absolute top-[1vh] left-[5.5vw]"></div> </div>
            <div> Last Seen {last_seen} </div>
        </div>
    
    </>
}

export default FriendBlock;