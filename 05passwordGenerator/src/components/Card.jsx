import React, { useState , useCallback, useEffect, useRef} from 'react'

const Card = () => {
    const [length , setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [character, setCharacter] = useState(false)
    const [password, setPassword] = useState("")
    
    const passwordGenerator = useCallback( () => {
        let pass = ""
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let numbers = '0123456789'
        let allCharacters = '!@#$%^&*()_+=-;{}[].,<>?/'

        for (let i = 0; i < length; i++) {
            if(number) {
                characters += numbers
            }
            if(character){
                characters += allCharacters
            }
             pass = pass + characters[Math.floor(Math.random() * characters.length )]
        }
        setPassword(pass)
    }, [number, length, character, setPassword ])

    useEffect(() => {
        passwordGenerator()
    }, [length, number, character, passwordGenerator])

    const passwordReference = useRef(null)

   const copyToClipboard = useCallback(() => {
    passwordReference.current?.select()
    navigator.clipboard.writeText(password)
   }, [password] )

  return (
    <>
    <div className='bg-gray-700 w-2/3 h-80 rounded-3xl '>
        <div className='p-5 flex justify-evenly mt-10'>
            <input 
            type="text"
            className='w-2/3 h-10 rounded-xl text-xl text-blue-600 m-1'
            placeholder='Password'
            value={password}
            readOnly
            ref={passwordReference}
            />
            <button className='bg-blue-600 w-1/3 h-10 rounded-xl text hover:bg-blue-700 active:bg-blue-900 m-1 text-white'
            onClick={copyToClipboard}
            >
            Copy to clipboard
            </button>
        </div>
        <h1 className='text-2xl text-white flex justify-center'> Customise your password</h1>


        <div className='mt-10 flex justify-evenly'>
            <div>
            <h1 className='text-white'>Length : {length}</h1>
            <input 
            type="range" 
            name="Length" 
            min={8} 
            max={100} 
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            className='cursor-pointer'
            />
            </div>
            <div className='flex'>
            <input 
            type="checkbox" 
            name="Number"
            defaultChecked={number}
            onChange={() => {
                setNumber((previousValue) => !previousValue)
            }}
            />
            <h1 className='mt-3 ml-3 text-white '>Number</h1>
            </div>
            <div className='flex'>
            <input 
            type="checkbox" 
            name="Special Character" 
            defaultChecked={character}
            onChange={() => {
                setCharacter((previousValue) => !previousValue)
            }}
            />
            <h1 className='mt-3 ml-3 text-white '>Special Characters</h1>
            </div>            
        </div>
    </div>
    </>
  )
}

export default Card