import React, { useState } from 'react'
import PropTypes from 'prop-types' 

const Button = ({title, color, sendDataToParent}) => {

    const [childData, setChildData]= useState("");

    const sendDataFromChildToParent = () => {
        let setData = "Data change from Children";
        setChildData(setData);
        sendDataToParent(setData);
    }

  return (
    <>
        <button className='btn' style={{'backgroundColor': color}} onClick={sendDataFromChildToParent}>{title}</button>
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
