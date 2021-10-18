import React, { useEffect, useState } from 'react';
import APIFetch from './api';
import Routine from './routine';



const Routines = (props) => 
{
    const token=props.token;
    const user=props.user;
    const [routines,setRoutines]=useState([]);
    const [updater,setUpdater]=useState([]);



    useEffect(()=>
    {
        APIFetch(
        {
            url:"routines/",
            method:"GET"
        }).then((response)=>
        {
            setRoutines(response);
        });
    },[updater])


    return <>
    {routines.map((routine)=>
    {
        return <Routine key={routine.id} routine={routine} token={token} user={user} setUpdater={setUpdater}></Routine>;
    })}
    </>;
}

export default Routines;