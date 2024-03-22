import React from 'react'


function Login({control}) {
    
  return (
    <div>
    
            <h1 className=''>Enter your Details for {control} </h1>
            <div className=''>
                <label htmlFor="username">username:</label>
                <input type="text" id='username' />
                <br/>

                <label htmlFor="password">password:</label>
                <input type="text" id='password' />
                <br/>

                <button type='sumbit'>{control}</button>

            </div>
    
    </div>
  )
}

export default Login