import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Card from '../Components/Card/Card'
import Chip from '../Components/Chip/Chip'
import Board from './Board/Board'

const Router = () => {
  return (
        <Routes>
            <Route path='/' element />
            <Route path='/boards' element={<Board />} />
            <Route path='/chip' element={<Chip />} />
            <Route path='/card' element={<Card />} />
        </Routes>
  )
}

export default Router