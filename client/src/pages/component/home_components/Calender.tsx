import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

type Prop = {
    calenderView: boolean
    openCalender: React.Dispatch<React.SetStateAction<boolean>>,
}


export function Calender({calenderView, openCalender}: Prop) {
    return <>
        {calenderView && <div className="flex justify-center items-center inset-0 absolute">
            <div className="z-999 bg-black/50 absolute inset-0" onClick={() => openCalender(false)}> </div>
            <div className="w-[55vw] h-[40vw] z-1000 bg-violet-400 absolute">
                <FullCalendar height="100%" plugins={[ dayGridPlugin ]} initialView="dayGridMonth"/>
            </div>
        </div>}
    </>
}

export default Calender