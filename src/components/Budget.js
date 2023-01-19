import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const budgetHandler = e => {
        if(e.target.value > 20000){
            alert('Budget can not exceed 20,000')
            dispatch({type:'SET_BUDGET', payload:20000})
        }

        if(e.target.value < totalExpenses){
            alert(`Budget can not be lower than ${totalExpenses}`)
            dispatch({type:'SET_BUDGET', payload:totalExpenses})
        }
        dispatch({type:'SET_BUDGET', payload:e.target.value})
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input type='number' step='10' value={budget} onChange={budgetHandler}/></span>
        </div>
    );
};

export default Budget;