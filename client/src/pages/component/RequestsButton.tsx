import { Inbox } from "lucide-react";
import { useState } from 'react';

// I want to be able to hover over my button and then my requests will pop up. I can accept and decline requests accordingly - but once my mouse LEAVES the div then the pop up disappears. No overlap.
function RequestsButton () { 
    const [ popUp, setPopup ] = useState(false)
    const [ notif, notify ] = useState(false)

    return <>
        <div className="border-2 rounded-full w-1/4 border-violet-300 flex justify-center items-center hover:cursor-pointer hover:bg-amber-50 relative bg-amber-50" onMouseEnter={() => setPopup(true)} onMouseLeave={() => setPopup(false)}>
            <Inbox size="15"/> 
            {popUp && <div className="absolute top-[1.25vw] w-[10.5vw] overflow-scroll no-scrollbar right-1 bg-violet-200 border-4 border-violet-300 h-[20vh]"> <div className=""> </div> </div>}
        </div>      
    </>
}

export default RequestsButton;

// Today's session: 
// Create request - what it looks like.
// Connect the connection to getRequests. 
// Add notification --> how many notifications --> little curved div that pops up on the icon when request > 1 --> I would like it to disappear when I decline or accept the offer. Probs should say "NO REQUESTS HERE ADD FRIENDS"
// Change colour scheme - figure out where the purple is. Ty.