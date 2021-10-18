import React, { useEffect, useState } from 'react';
import APIFetch from './api';
import Routine from './routine';



const Routines = (props) => 
{
    const token=props.token;
    const user=props.user;
    const [routines,setRoutines]=useState([]);

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
    },[])
    return <>
    {routines.map((routine)=>
    {
        console.log(routine);
        return <Routine key={routine.id} routine={routine} token={token} user={user}></Routine>;
    })}
    </>;
}

export default Routines;