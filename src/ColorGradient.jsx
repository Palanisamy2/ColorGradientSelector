import React, { useState } from 'react';
import './ColorGradient.css';

function ColorGradient() {
    const [color, SetColor] = useState('#FFFFFF');
    function onChangeEvent(e){
        SetColor(e.target.value);
    }

    return(
        <div className='Full-page' style={{backgroundColor : color}}>
        <div className='Color-body'>
        <h1>Color Gradient Selector</h1>
             <div className='Color-container' style={{backgroundColor : color}}>
                 
             </div>
                  <div className='Color-selector'> 
                      <p>selected color :<b> {color}</b></p>
                         <label> Select color : </label>
                              <input type='color' value={color} onChange={onChangeEvent} />
                   </div>
    </div>
        </div>
    
);
}

export default ColorGradient;