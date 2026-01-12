import { Inbox } from "lucide-react";
import React, { useState, useEffect } from "react";

type Coordinates = {
    x: number | null,
    y: number | null
}
// I want to be able to hover over my button and then my requests will pop up. I can accept and decline requests accordingly - but once my mouse LEAVES the div then the pop up disappears. No overlap.
function RequestsButton () {
    const checkPosition = () => {
        const [mousePosition, setMousePosition ] = useState<Coordinates>({x: null, y: null})

        useEffect(() => {
            const updateMousePosition = (ev: MouseEvent) => {
                setMousePosition({x: ev.clientX, y: ev.clientY})
            };
        
            window.addEventListener('mousemove', updateMousePosition);

            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            }
        }, [])

        return mousePosition
    }

    const position = checkPosition();


    return <>
        <div className="border-2 rounded-full w-1/4 border-violet-300 flex justify-center items-center hover:cursor-pointer hover:bg-amber-50">
            <Inbox size="15"/> 
        </div>
    </>
}

export default RequestsButton;