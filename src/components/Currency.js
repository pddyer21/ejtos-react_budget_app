import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const [Curr, setCurr] = useState('');
    
    return (
   
            <div>  
                <label className="alert alert-success" htmlFor="inputGroupCurr" style={{color: 'white', borderColor: '#d4edda', marginRight: '0px', borderRadius:"6px 0 0 6px", fontWeight:"bold"}} >Currency</label>
                
                <select className="alert alert-success" id="inputGroupCurr" onChange={(event) => setCurr(event.target.value)} style={{borderColor: '#d4edda', marginLeft: '0px', borderRadius: "0px 6px 6px 0px", fontWeight: "bold"}}>
                                <option value="$ Dollar" name="Dollar" > $ Dollar</option>
                                <option value="£ Pound" name="Pound" >£ Pound</option>
                                <option value="&#8364; Euro" name="Euro" >&#8364; Euro</option>
                                <option value="&#8377; Rupee" name="Rupee" >&#8377; Rupee</option>
                </select>
            </div> 
    )
            
};


export default Currency;