import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

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
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency} {props.cost}</td>
        <td><FaArrowAltCircleUp size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></FaArrowAltCircleUp></td>
        <td><FaArrowAltCircleDown size='2.2em' color="red" onClick={event=> decreaseAllocation(props.name)}></FaArrowAltCircleDown></td>
        <td><TiDelete size='2.2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;