import React, { useState,useEffect } from 'react';
import Activity from './activity';
import APIFetch from './api';

const RoutineForm = (props) => 
{
    const token=props.token;
    const user=props.user;
    const routine=props.routine;


    const [name,setName]=useState("");
    const [goal,setGoal]=useState("");
    const [activities,setActivities]=useState([]);
    const [allActivities,setAllActivities]=useState([])
    const [activityDropdown,setActivityDropdown]=useState(false);
    const [isPublic,setIsPublic]=useState(false);
    const [message,setMessage]=useState("");

    //setup use effect
    useEffect(()=>
    {
        APIFetch(
            {
                url:`activities/`,
                method:"GET",
            }).then((response)=>
            {
                setAllActivities(response);
            });
        if(routine)
        {
            setName(routine.name);
            setGoal(routine.goal);
            setActivities(routine.activities);
        }
    },
    []);

    //message manager
    useEffect(()=>
    {
        setMessage("Enter name, goal, and at least one activity with duration and count to create a routine. Default duration and count are 1.");
    },
    [name,goal,activities.length]);

    return <form onSubmit={async(event)=>
    {
        event.preventDefault();
        const response= await APIFetch(
        {
            url:`routines/${routine?routine.id+"/":""}`,
            method:`${routine?"PATCH":"POST"}`,
            body:
            {
                name:name,
                goal:goal,
                IsPublic:isPublic
            }
        }
        );

        if(response.id)
        {
            if(routine.activities)
            {
                activities.filter((activity)=>
                {
                    return !routine.activities.includes(activity);
                }).map(()=>
                {
                    return APIFetch(
                    {
                        url:`routines/${routine.id}/activities/`,
                        method:`${routine?"PATCH":"POST"}`,
                        body:
                        {
                            name:name,
                            goal:goal,
                            IsPublic:isPublic
                        }
                    }
                    );
                })
            }
        }
        else
        {
            setMessage(response.error);
        }
    }}>
        <input required type="text" placeholder="Name" value={name} onChange={(event)=>
        {
            setName(event.target.value);
        }}/>

        <input required type="text" placeholder="Goal" value={goal} onChange={(event)=>
        {
            setGoal(event.target.value);
        }}/>
        <div>
            <input type="checkbox" checked={isPublic} value={isPublic}  onChange={()=>
            {
                setIsPublic(!isPublic);
            }}/>
            <label htmlFor="Public">Public</label>
        </div>



        <>{activities.map((activity,idx)=>
        {
            return <div key={activity.id}>{activity.name} 
                <input type="number" placeholder="Duration" value={activity.duration} onChange={(event)=>
                {
                    const temp=activities;
                    temp[idx].duration=event.target.value;
                    setActivities([...temp]);
                }}/>
                <input type="number" placeholder="Count" value={activity.count} onChange={(event)=>
                {
                    const temp=activities;
                    temp[idx].count=event.target.value;
                    setActivities([...temp]);
                }}/>
                <button type="button" onClick={()=>
                {
                    const temp=activities;
                    temp.splice(idx,1);
                    setActivities([...temp]);
                }}>Remove</button></div>;
                
        })}</>
        <dropdown>
            <button type="button" onClick={()=>
            {
                setActivityDropdown(!activityDropdown);
            }}>Add Activity</button>
            {activityDropdown?allActivities.filter((activity)=>
            {
                return !activities.includes(activity);
            }).map((activity)=>
            { 
                return <span key={activity.id}>
                    <Activity activity={activity}></Activity>
                    <button type="button" onClick={()=>
                    {
                        setActivities([...activities,activity]);
                    }}>Add</button></span>
            }):null}
        </dropdown>


        <p>{message}</p>

        <button type="submit" disabled={!name||!goal||activities.length>0}>{routine?"Edit":"Create"}</button>
    </form>
}

export default RoutineForm;