import React from 'react'
import './ButtonForm.css';

function ButtonForm ({text, type, value, classButton, emptyInput}) {
    
    return (
        <button 
        disabled={emptyInput === '' ? true : false}
        type={type} 
        value={value} 
        aria-label={value}
        className={classButton}>
            {text}
        </button>
    )
}

export default ButtonForm;
