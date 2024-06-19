import React from 'react'

const Input = () => {
  return (
    <>
    <div className='flex justify-evenly'>
      <input 
      type="text" 
      name="Currency"
      placeholder="Amount"
      className='text-black w-1/2 h-12 rounded-xl'
      />
      <img src="flag.src" alt="flag" />
      <select className='text-black'>
        <option value="usd">usd</option>
        <option value="inr">inr</option>
      </select>
    </div>
    </>
  )
}

export default Input