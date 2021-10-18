import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Activity from './activity';
import APIFetch from './api';

const Activities = () => 
{
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
    },[]);



    return <>{activities.map((activity)=>
        {
            return <Activity key={activity.id} activity={activity} ></Activity>
        })}
    </>;
}

export default Activities;