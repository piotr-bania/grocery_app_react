import React from 'react'
import { useState } from 'react'

const Content = () => {

    const [name, setName] = useState()

    const handleClick = () => {
        console.log('You clicked it')
    }

    const handleClick2 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p>Items will be here</p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={(e) => handleClick2(e)}>Click It</button>
        </main>
    )
}

export default Content