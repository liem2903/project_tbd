// Changes colour based on how long ago.
import { useState } from 'react';
import FlipButton from './FlipButton';

type prop = {
    name: string,
    last_seen: string
}

function FriendBlock({name, last_seen}: prop) {
    const [ flipped, flipOver ] = useState(false);
    const [ newName, setNewName] = useState("");

    const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();

            try {
                // await setNewName()
            } catch (err: any) {
                console.log(err.message);
            }
        }
    }

    return <>
        <div className='perspective-[1000px]'>
            <div className={flipped? "rotate-y-180 relative ml-5 w-4/5 h-[10vh] transform-3d duration-200": "ml-5 w-4/5 h-[10vh] relative transform-3d duration-500"}> 
                <div className="absolute inset-0 flex flex-col items-center bg-[#F1EDFF] border-2 border-violet-400 rotate-y-0 hide-back">   
                    <div className="flex justify-center items-center"> 
                        <FlipButton flipped={flipped} flipOver={flipOver}/>
                        <div className="text-xl">
                            {name}
                        </div>  
                        <div className="bg-red-500 min-w-[1.25vw] min-h-[2.5vh] rounded-full border-red-200 border-2 absolute right-1 top-0.5"/> 
                    </div>
                    <div>
                        Last Seen {last_seen} 
                    </div>
                </div>  

                <div className="absolute inset-0 flex flex-col items-center bg-[#F1EDFF] border-2 border-violet-400 rotate-y-180 hide-back"> 
                    <div className="flex justify-center items-center"> 
                        <FlipButton flipped={flipped} flipOver={flipOver}/>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-[0.5vh] text-shadow-2xs"> 
                                Change name: 
                            </div>
                            <div> 
                                <input type="text" placeholder={name} value={newName} onChange={(e) => {setNewName(e.target.value)}} onKeyDown={(e) => handleEnter(e)} className='w-[9vw] border-2 mt-[0.5vh] text-center'/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FriendBlock;