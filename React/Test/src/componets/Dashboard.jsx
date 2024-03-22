import React, { useState } from 'react'
import Login from './Login'
import { Link } from 'react-router-dom';

function Dashboard() {
    const [control,setControl]=useState(true);
  return (
    <div>
        <Link to='/home'>Go to Home</Link>
        {control?<Login control={"login"}/>:<Login control={"Signup"}/>}
        <button onClick={()=>setControl(!control)}>{control?"New user? SignUp":"Old user ! LogIn"} here</button>
    </div>
  )
}

export default Dashboard