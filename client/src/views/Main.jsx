import React, { useState } from 'react'
import GamesMenu from '../components/GamesMenu'

const Main = () => {

    const { mathQuiz, setMathQuiz } = useState([])
    
    return (
        <div>
            <GamesMenu />
        </div>
    )
}

export default Main