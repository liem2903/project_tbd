import Event from "./component/Event";
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { api } from "../interceptor/interceptor";

type Event = {
    eventName: string,
    timeStart: string,
    duration: string
}

function Home () {
    const [ events, setEvents ] = useState<Event[]>([]);

    useEffect(() => {

        const getAccess = async () => {
            let res = await api.get('/auth/getCalender');
            let calenderData = res.data.data;
            let resEvents: Event[] = []
            
            calenderData.map((data: any) => {
                let startDate = DateTime.fromISO(data.start.dateTime);
                let endDate = DateTime.fromISO(data.end.dateTime);

                let event = {
                    eventName: data.summary,
                    timeStart: startDate.toFormat("h:mma"),
                    duration: `${endDate.diff(startDate, 'hours').hours}`
                }

                resEvents.push(event);
            })

            setEvents(resEvents);
        }

        getAccess();
    }, [])

    return (
        <div className="flex gap-10 justify-evenly mt-10 relative">
            <div className="flex flex-col items-center gap-20">    
               { events.map((e) => <Event startTime={e.timeStart.toLowerCase()} action={e.eventName} day={"Today"} duration={e.duration}/>)}
            </div>

            <div className="flex flex-col items-center gap-20 mt-15">   
                <Event startTime={"2:00pm"} action={"Drinking Alcohol"} day={"Tomorrow"} duration={"3"}/>  
                <Event startTime={"5:00pm"} action={"Playing Volleyball"} day={"Tomorrow"} duration={"2"}/>  
            </div>

            <div className="absolute w-0.5 border opacity-2 shadow-2xl h-150"></div>
        </div>
    )
}

export default Home;
