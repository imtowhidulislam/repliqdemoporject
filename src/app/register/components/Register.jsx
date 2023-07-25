"use client"
import React, { useEffect, useState } from 'react'
import Form from '../page';

const Register = () => {
  const [toggleAction, setToogleAction] = useState(false);
  
  const toggleForm = () =>  {
    setToogleAction(!toggleAction);
  }
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(person));
  },[])

  useEffect(() => {
    console.log(toggleAction);
  },[toggleAction])

    return (
    <div className='contact px-2 md:px-16 py-24' >
        <div className='container flex items-center justify-center'>
            {
                toggleAction ? (<Form handleChange={handleChange} handleSubmit={handleSubmit} toggleForm={toggleForm} signup="sign up" account="have already an account? " acctionType="sign in" />) : (<Form handleChange={handleChange} handleSubmit={handleSubmit} toggleForm={toggleForm} signup="sign in" account="don't have an account? " acctionType="sign up" />)
            }

        </div>
    </div>
  )
}

export default Register