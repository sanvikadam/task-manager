import React, { useState } from 'react'
import PropTypes from 'prop-types' 

const Button = ({title, color, onAdd, changeStatus}) => {
    console.log(changeStatus);
  return (
    <>
        <button className='btn' style={{backgroundColor: color}} onClick={onAdd}>{changeStatus ? 'Close' : 'Add'}</button>
    </>
    )
}

Button.defaultProps = {
    title: "Add",
    color: "grey"
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
}





export default Button
