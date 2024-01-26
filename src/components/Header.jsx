import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({addTask, textChange}) => {
    console.log(textChange);
    
  return (
    <div className='header'>
      <h2>Task Tracker</h2>
      <Button title="Add" color={textChange ? 'red' : 'green'} onAdd={addTask} changeStatus={textChange} />
    </div>
  )
}

Header.defaultProps = {
    title: "Hello",
    name: "Sanvi"
}

Header.propTypes= {
    title: PropTypes.string
  }

export default Header
