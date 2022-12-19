import React from 'react'
import './ButtonForm.css';

function ButtonForm ({text, type, value, classButton, disabledBtn}) {
    
    return (
        <button 
        disabled={disabledBtn !== '' ? true : false}
        type={type} 
        value={value} 
        aria-label={value}
        className={classButton}>
            {text}
        </button>
    )
}

export default ButtonForm;
