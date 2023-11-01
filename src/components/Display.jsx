import React from 'react'

const Display = ({ value }) => {
  return (
    <div className='display-container' style={{ backgroundColor: 'white' }}>
      {value}
    </div>
  )
}

export default Display
