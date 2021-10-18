import React, { useState} from 'react';

import APIFetch from './api';

const NewActivityForm = (props) => 
{
    const token=props.token;

    const[name,setName]=useState("");
    const[description,setDescription]=useState("");
    const [message,setMessage]=useState("");

    return <form onSubmit={async(event)=>
    {
        event.preventDefault();
        const response= await APIFetch(
        {
            url:`activities/`,
            method:"POST",
            token:token,
            body:
            {
                name:name,
                description:description
            }
        }
        );

        if(response.id)
        {
            setMessage("activity created");
        }
    }}>

        <input required type="text" placeholder="Name" value={name} onChange={(event)=>
        {
            setName(event.target.value);
        }}/>

        <input required type="text" placeholder="Description" value={description} onChange={(event)=>
        {
            setDescription(event.target.value);
        }}/>

        <button type="submit" disabled={!name||!description}>Add</button>
        
        <p>{message}</p>
    </form>
}

export default NewActivityForm;