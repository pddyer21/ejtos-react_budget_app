import React from 'react';


const Currency = () => {
    
    return (
        <div className='alert alert-success'>
            <select className="custom-select" id="inputGroupCurr" >
                            <option defaultValue>£ Pound</option>
                            <option value="Marketing" name="marketing"> $ Dollar</option>
                            <option value="Sales" name="sales">£ Pound</option>
                            <option value="Finance" name="finance">&#8364; Euro</option>
                            <option value="HR" name="hr">&#8377; Rupee</option>
            </select>

        </div>
    )
            
};


export default Currency;