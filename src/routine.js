import React, {useEffect, useState} from 'react';
import Activity from './activity';
import ActivityForm from './activityForm';
import APIFetch from './api';

import RoutineForm from './routineForm';
import Routine_ActivitiesForm from './routine_activitiesForm';


const Routine = (props) => 
{
    const routine=props.routine;
    const token=props.token;
    const user=props.user;
    
    const [showRoutineForm,setShowRoutineForm]=useState(false);
    const [showActivityForm,setShowActivityForm]=useState(false);
    const [showRoutineActivityForm,setShowRoutineActivityForm]=useState(false);

    useEffect(()=>
    {
        console.log(routine);
        console.log(user);

    },
    [showRoutineForm])


    return <div className="Routine">
    <h2>{routine.name}</h2>
    <h3>By:{routine.creatorName}</h3>
    <h3>Goal:{routine.goal}</h3>
    <h3>Activities:</h3>
    {routine.activities.map((activity)=>
    {
        return <>
             {user.id===routine.creatorId?
             <>
                <button onClick={()=>
                {
                    setShowRoutineActivityForm(!showRoutineActivityForm);
                }}>Edit this activity</button>
                {showRoutineActivityForm?
                <Routine_ActivitiesForm key={activity.routineActivityId} token={token} activity={activity}></Routine_ActivitiesForm>:null}
            </>:null}
            
            <Activity key={activity.id} activity={activity} token={token}></Activity>
        </>;
    })}
    {user.id===routine.creatorId?
    <>
        <button onClick={()=>
        {
            setShowRoutineForm(!showRoutineForm);
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

            })
        }}>Delete this routine</button>
        <button onClick={()=>
        {
            setShowActivityForm(!showActivityForm);
        }}>Add activities</button>
        {showRoutineForm?
        <RoutineForm token={token} routine={routine} setShowForm={setShowRoutineForm}></RoutineForm>:null}
        {showActivityForm?
        <ActivityForm token={token} routine={routine} setShowForm={setShowActivityForm}></ActivityForm>:null}

    </>:null}
    </div>;
}

export default Routine;