import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    
    const handleBudgetChange = (value) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost)
        },0);
   

        if (value < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending!")
        } else if (value > 20000) {
            alert("The budget can't exceed 20000!");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}  </span>
            <input type="number" step="10" value={budget} onChange={(event) => handleBudgetChange(event.target.value)}></input>
            
        </div>
    );
};
export default Budget;
