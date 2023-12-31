import './ExpenseForm.css';
import { useState } from "react";

export const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setSelectedDate(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(selectedDate)
        }

        props.onSaveExpense(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setSelectedDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount ($)</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={selectedDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add new Expense</button>
            </div>
        </form>
    )
}