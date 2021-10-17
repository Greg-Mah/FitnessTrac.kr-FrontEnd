import React from 'react';

const Activity = (props) => 
{
    const activity=props.activity;
    const token=props.token;

    return <>
        <h4>{activity.name}</h4>
        <h5>{activity.description}</h5>
        <h5>{activity.duration?"Duration:"+activity.duration:null}</h5>
        <h5>{activity.count?"Count:"+activity.count:null}</h5>
    </>;
}

export default Activity;