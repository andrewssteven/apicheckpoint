import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserLists = () => {

    const [listofuser, setListofuser] = useState()

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setListofuser(response.data))
        .catch(error => console.log(error))
    },[])

    if(!listofuser) return <p className='h-screen grid place-items-center font-bold text-2xl animate-pulse'>Loading.....</p>

  return (
    <div>
        <h1 className='text-2xl text-center font-semibold pt-3 text-white/60'>User Database</h1>
        <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:py-10 md:px-10 px-5 '>
            {listofuser.map((user)=>(
                <div key={user.id} className='shadow border border-white/60 text-white/60 font-semibold rounded-md p-4'>
                    <p>Name: {user.name} </p>
                    <p>User Name: {user.username} </p>
                    <p>Email: {user.email} </p>
                    <p>City: {user.address.city} </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserLists