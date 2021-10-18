import React, { useEffect, useState} from 'react';
import Activity from './activity';
import APIFetch from './api';
import NewActivityForm from './newActivityForm';

const Activities = (props) => 
{
    const token=props.token;
    const [activities,setActivities]=useState([])
    const [showCreateForm,setShowCreateForm]=useState(false);

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



    return <>
        {token?
        <>
            <button onClick={()=>
            {
                setShowCreateForm(!showCreateForm);
            }}>Create activity</button>
            {showCreateForm?
            <NewActivityForm token={token}></NewActivityForm> :null}
        </>:null}
        {activities.map((activity)=>
        {
            return <Activity key={activity.id} activity={activity} ></Activity>
        })}
    </>;
}

export default Activities;