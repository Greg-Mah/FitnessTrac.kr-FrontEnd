import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Activity from './activity';
import APIFetch from './api';

const Activities = (props) => 
{
    const token=props.token;
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
            return <Activity activity={activity} token={token}></Activity>
        })}
    </>;
}

export default Activities;