import React, { useEffect, useState } from 'react';
import APIFetch from './api';
import Routine from './routine';
import RoutineForm from './routineForm';

const Routines = (props) => 
{
    const token=props.token;
    const user=props.user;
    const [routines,setRoutines]=useState([]);
    const [showForm,setShowForm]=useState(false);
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
        <button onClick={()=>
        {
            setShowForm(!showForm);
        }}>Create a new routine</button>
        {showForm?
        <RoutineForm token={token} user={user}></RoutineForm>:null}
    {routines.map((routine)=>
        {
            return <Routine key={routine.id} routine={routine} token={token} user={user}></Routine>;
    })}
    </>;
}

export default Routines;