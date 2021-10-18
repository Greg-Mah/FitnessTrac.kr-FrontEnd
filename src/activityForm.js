import React, { useState,useEffect } from 'react';
import Activity from './activity';

import APIFetch from './api';

const ActivityForm = (props) => 
{
    const token=props.token;
    const routine=props.routine;
    const setShowForm=props.setShowForm;
    const baseActivity=props.activity

    const [count,setCount]=useState(1);
    const [duration,setDuration]=useState(1);
    const [selected,setSelected]=useState(0);
    const [activities,setActivities]=useState([])
    
    useEffect(()=>
    {
        APIFetch(
        {
            url:`activities/`,
            method:"GET",
        }).then((response)=>
        {
            setActivities(response);
        });
        if(baseActivity)
        {
            setCount(baseActivity.count);
            setDuration(baseActivity.duration);
        }
    },[]);

    return <form onSubmit={async(event)=>
    {
        event.preventDefault();
        const response= await APIFetch(
        {
            url:`routines/${routine.id}/activities/`,
            method:"POST",
            token:token,
            body:
            {
                activityId:activities[selected].id,
                count:count,
                duration:duration
            }
        }
        );

        if(response.id)
        {
            setShowForm(false);
        }
    }}>

        <div className="Scrollbox">
            {activities.map((activity,idx)=>
            {
                activity.idx=idx;
                return activity;
            }).filter((activity)=>
            {
                let i=0;
                while(i<routine.activities.length)
                {
                    if(activity.id===routine.activities[i])
                    {
                        return false;
                    }
                    i++;
                }
                return true;
            }).map((activity)=>
            {
                return <div key={activity.id}>
                    <Activity activity={activity}></Activity>
                    <button type="button" onClick={()=>
                    {
                        setSelected(activity.idx);
                    }}>Select</button>
                </div>
            })}
        </div>

        <input required type="text" placeholder="Count" value={count} onChange={(event)=>
        {
            setCount(event.target.value);
        }}/>

        <input required type="text" placeholder="Duration" value={duration} onChange={(event)=>
        {
            setDuration(event.target.value);
        }}/>




        <button type="submit" disabled={!count||!duration}>Add</button>
    </form>
}

export default ActivityForm;