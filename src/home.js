import React from 'react';

const Home = (props) => 
{
  const user=props.user;
  return <h1>Welcome {user?user.name:"to FitnessTrak.kr"}</h1>
}

export default Home;