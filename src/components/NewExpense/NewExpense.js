import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


function NewExpense(props){

    const AddHandler = (detail) => {
        
       props.addItem(detail);
        
    }


    return (<div className="new-expense">
        <ExpenseForm AddDetail={AddHandler} />
    </div>);
}

export default NewExpense;