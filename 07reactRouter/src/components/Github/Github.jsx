import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

   const Github = () => {
    const data = useLoaderData()
//     const { username } = useParams()
//         const loadCard =async () => {
//         console.log(username);
//            const response = await fetch("https://api.github.com/users/vaibhav27vds");
//            const data = await response.json();
//            console.log(data.login);
//            const name = data.name
//            console.log(name);
//     }

  return (
    <div >
        <h1 className='text-center text-gray-800 text-3xl'>{data.name}'s card</h1>
        <div className='flex justify-center mt-10'>
        <div className='bg-gray-900 w-1/3 h-64 rounded-2xl text-white'>
        <h1 className='text-center text-2xl'>Card</h1>
        <div className='flex justify-evenly'>
        <ul className='m-3 mt-5'>
            <li>Name: {data.name}</li>
            <li>Username: {data.login}</li>
            <li>Followers: {data.followers}</li>
            <li>Following: {data.following}</li>
            <li>UserId: {data.id}</li>
            <li>About: {data.bio}</li>
            <li>Repositories: {data.public_repos}</li>
        </ul>
        <div className='mt-10 '>
            <img src={data.avatar_url} alt="Profile Image" width={100} height={120} className='rounded-md'  />
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vaibhav27vds')
    return response.json()
}