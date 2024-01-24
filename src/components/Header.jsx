import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, name}) => {
    const [btnstate, setBtnState] = useState("Hello Sanvi");

    const handleDataFromChild = (data) => {
        console.log(data);
        setBtnState(data);
    }
  return (
    <div className='header'>
      <h2>Task Tracker</h2>
      <Button title="Add" color="green" sendDataToParent={handleDataFromChild} />
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
