import React from 'react';
import Activity from './activity';

const Routine = (props) => {
    const routine=props.routine;
    const token=props.token;
    const user=props.user;


    return <>
    <h2>{routine.name}</h2>
    <h3>By:{routine.creatorName}</h3>
    <h3>Goal:{routine.goal}</h3>
    <h3>Activities:</h3>
    {routine.activities.map((activity)=>
    {
        return <Activity activity={activity} token={token}></Activity>;
    })}
    </>;
}

export default Routine;