import React from 'react';
import '../styles/main.scss';

function Alert({message, clear}) {
  
    return (
        <>
        <div className="alert-clear" onClick={clear}></div>
        <div className='alert'>
            {message}
            <button onClick={clear}>X</button>     
        </div>    

        
    </>
    );
};
export default Alert;
