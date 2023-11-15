import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const handleCurrencyChange = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        })
    };
   
    return (
   
        <div className="select-wrap">  
                <label className="alert alert-success" htmlFor="inputGroupCurr" style={{color:'white', backgroundColor:'#93E499'}} >Currency 
                <select className="Curr-selector" id="inputGroupCurr"  style={{backgroundColor:'#93E499', borderColor: '#93E499', color: 'white'}} value={currency} onChange={(event) => handleCurrencyChange(event.target.value)} >
                    <option id="op1" value="$" name="Dollar" style={{color:'black', width:"100%"}}>$ Dollar</option>
                    <option id="op2" value="£" name="Pound" style={{color:'black', width:"100%"}}>£ Pound</option>
                    <option id="op3" value="&#8364;" name="Euro" style={{color:'black', width:"100%"}}>&#8364; Euro</option>
                    <option id="op4" value="&#8377;" name="Rupee"style={{color:'black', width:"100%"}}>&#8377; Rupee</option>
                </select>
                </label>                      
        </div> 
    )
            
};


export default Currency;