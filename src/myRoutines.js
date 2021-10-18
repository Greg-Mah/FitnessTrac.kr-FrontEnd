import React, { useEffect, useState } from 'react';
import APIFetch from './api';
import Routine from './routine';
import RoutineForm from './routineForm';

const MyRoutines = (props) => 
{
    const token=props.token;
    const user=props.user;
    const [routines,setRoutines]=useState([]);
    const [showForm,setShowForm]=useState(false);
    useEffect(()=>
    {
        APIFetch(
        {
            url:"routines/myRoutines/",
            method:"GET",
            token:token
        }).then((response)=>
        {
            setRoutines(response);
        });
    },[showForm])
    return <>
        <button onClick={()=>
        {
            setShowForm(!showForm);
        }}>Create a new routine</button>
        {showForm?
        <RoutineForm token={token} user={user} setShowForm={setShowForm}></RoutineForm>:null}
    {routines.map((routine)=>
    {
        return <Routine key={routine.id} routine={routine} token={token} user={user}></Routine>;
    })}
    </>;
}

export default MyRoutines;