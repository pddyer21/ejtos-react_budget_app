import React from 'react';


const Currency = () => {
    
    return (
        <div className='alert alert-info'>
            <select className="custom-select" id="inputGroupCurr" >
                            <option defaultValue>Choose...</option>
                            <option value="Marketing" name="marketing"> $ Dollar</option>
                            <option value="Sales" name="sales">£ Pound</option>
                            <option value="Finance" name="finance">Euro</option>
                            <option value="HR" name="hr">Rupee</option>
            </select>

        </div>
    )
            
};


export default Currency;