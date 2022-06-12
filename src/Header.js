import React from 'react'

const Header = () => {
    
    const handleNameChange = () => {
    const names = ['Anule', 'Filho', 'Cytovscy']
    const int = Math.floor(Math.random() * 3)
        
    return names[int]
    }

    return (
        <header>
            <h3>Hi {handleNameChange()}!</h3>
            <h1>Groceries List</h1>
            <hr />
        </header>
    )
}

export default Header