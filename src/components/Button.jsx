import React from 'react'

const Button = ({ value, backgroundColor, onClick }) => {
  return (
    <button
      value={value}
      onClick={onClick}
      className='button-container'
      style={{ backgroundColor: backgroundColor }}>
      <h4>{value}</h4>
    </button>
  )
}

export default Button
