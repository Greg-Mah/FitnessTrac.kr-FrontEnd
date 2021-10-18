import React, { useState,useEffect } from 'react';

import APIFetch from './api';

const RoutineForm = (props) => 
{
    const token=props.token;
    const routine=props.routine;
    const setShowForm=props.setShowForm;


    const [name,setName]=useState("");
    const [goal,setGoal]=useState("");
    const [isPublic,setIsPublic]=useState(false);
    const [message,setMessage]=useState("");

    //setup use effect
    useEffect(()=>
    {
        if(routine)
        {
            setName(routine.name);
            setGoal(routine.goal);
            setIsPublic(routine.isPublic);
        }
    },
    []);

    //message manager
    useEffect(()=>
    {
        setMessage("Enter name and goal to create a routine.");
    },
    [name,goal]);

    return <form onSubmit={async(event)=>
    {
        event.preventDefault();

        console.log(routine);
        const response= await APIFetch(
        {
            url:`routines/${(routine?routine.id+"/":"")}`,
            method:`${routine?"PATCH":"POST"}`,
            token:token,
            body:
            {
                name:name,
                goal:goal,
                isPublic:isPublic
            }
        }
        );

        if(response.id)
        {
            setShowForm(false);
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

        <p>{message}</p>

        <button type="submit" disabled={!name||!goal}>{routine?"Edit":"Create"}</button>
    </form>
}

export default RoutineForm;