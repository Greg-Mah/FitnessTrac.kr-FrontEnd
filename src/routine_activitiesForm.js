import React, { useState,useEffect } from 'react';

import APIFetch from './api';

const Routine_ActivitiesForm = (props) => 
{

    const token=props.token;
    const activity=props.activity

    const [count,setCount]=useState(1);
    const [duration,setDuration]=useState(1);
    const [message,setMessage]=useState("");
    
    useEffect(()=>
    {
        if(activity)
        {
            setCount(activity.count);
            setDuration(activity.duration);
        }
    },[]);

    return <form onSubmit={async(event)=>
        {
            event.preventDefault();
            const response= await APIFetch(
            {
                url:`routine_activities/${activity.routineActivityId}`,
                method:"PATCH",
                token:token,
                body:
                {
                    count:count,
                    duration:duration
                }
            }
            );
    
            if(response.id)
            {
                setMessage("Activity updated.");
            }
        }}>
    
    
            <input required type="text" placeholder="Count" value={count} onChange={(event)=>
            {
                setCount(event.target.value);
            }}/>
    
            <input required type="text" placeholder="Duration" value={duration} onChange={(event)=>
            {
                setDuration(event.target.value);
            }}/>
    
            
    
    
            <button type="submit" disabled={!count||!duration}>Submit Edit</button>

            <button onClick={(event)=>
            {
                event.preventDefault();
                APIFetch(
                {
                    url:`routine_activities/${activity.routineActivityId}`,
                    method:"DELETE",
                    token:token
                }
                ).then((response)=>
                {
                    if(response.success)
                    {
                        setMessage("Activity deleted.");
                    }
                })
        
                
            }}>Delete</button>

            <p>{message}</p>
        </form>
}

export default Routine_ActivitiesForm;