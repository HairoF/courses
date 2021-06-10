import React from 'react';
import './spinner.css';
const divStyle = {
    marginTop: '35px',
    position: 'absolute',
    left: '50%'
}

const Spinner = () => {
    return (
    <div style={divStyle}>
    <div>Loading...</div>
    <div className="spinner"></div>
    </div>
    )
}

export default Spinner;
