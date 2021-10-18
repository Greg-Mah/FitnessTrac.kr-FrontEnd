import React, {useEffect, useState} from 'react';
import Activity from './activity';
import APIFetch from './api';

import RoutineForm from './routineForm';


const Routine = (props) => 
{
    const routine=props.routine;
    const token=props.token;
    const user=props.user;
    const setUpdater=props.setUpdater;
    
    const [showForm,setShowForm]=useState(false);

    useEffect(()=>
    {
        setUpdater([]);
    },
    [showForm])


    return <>
    <h2>{routine.name}</h2>
    <h3>By:{routine.creatorName}</h3>
    <h3>Goal:{routine.goal}</h3>
    <h3>Activities:</h3>
    {routine.activities.map((activity)=>
    {
        return <Activity key={activity.id} activity={activity} token={token}></Activity>;
    })}
    {user.id===routine.id?
    <>
        <button onClick={()=>
        {
            setShowForm(!showForm);
        }}>Edit this routine</button>
        <button onClick={()=>
        {
            APIFetch(
            {
                url:`routines/${routine.id}/`,
                method:`DELETE`,
                token:token,
            }
            ).then(()=>
            {
                setUpdater([]);
            })
        }}>Delete this routine</button>
        {showForm?
        <RoutineForm token={token} user={user} routine={routine} setShowForm={setShowForm}></RoutineForm>:null}
    </>:null}
    </>;
}

export default Routine;