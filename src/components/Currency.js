import React, { useState } from 'react';



const Currency = () => {
    const [Curr, setCurr] = useState('');


    
    return (
   
            <div>  
                <label className="alert alert-success" htmlFor="inputGroupCurr" >Currency
                    <select className="alert alert-success" id="inputGroupCurr" onChange={(event) => setCurr(event.target.value)}>
                                    <option value="$" name="Dollar" > $ Dollar</option>
                                    <option value="£" name="Pound" >£ Pound</option>
                                    <option value="&#8364; Euro" name="Euro" >&#8364; Euro</option>
                                    <option value="&#8377; Rupee" name="Rupee" >&#8377; Rupee</option>
                    </select>
                </label>
            </div> 
    )
            
};


export default Currency;