import React, { useState } from 'react'

const PointsTable = ({ resetPoint, p1Point, p2Point, drawPoint }) => {

 const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className='points'>
        <div className='viewPoint'>
          <button onClick={()=>setIsOpen(!isOpen)}>View points</button>
        </div>
        <div className={`pointsTable ${isOpen?"open":""}`}>
          <h2>points table</h2>
          <div>
            <h3 style={{color:'red'}}>player 1: {p1Point}</h3>
            <h3 style={{color:'blue'}}>player 2: {p2Point}</h3>
            <h3>draw : {drawPoint}</h3>
          </div>
          <button onClick={resetPoint}>RESET POINTS</button>
        </div>
      </div>
    </>
  )
}

export default PointsTable