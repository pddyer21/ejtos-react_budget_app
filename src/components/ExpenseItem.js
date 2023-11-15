import React, { useContext } from 'react';
import { FcPlus } from 'react-icons/fc';
import {FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'SUBTRACT_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus  size="30px" onClick={event=> increaseAllocation(props.name)}>+</FcPlus></td>
        <td><FaMinusCircle color="red" size="30px" onClick={event=> decreaseAllocation(props.name)}>-</FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
