import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


function NewExpense(props){

    const AddHandler = (detail) => {
        
       props.addItem(detail);
        
    }

    const [shrink,setShrink] = useState(true);
    
    const shrinkHandler = () =>{setShrink(!shrink)}

    return (<div className="new-expense">
    {shrink && <button onClick={shrinkHandler} >Add New Expense</button>}
      
      {!shrink &&  <ExpenseForm AddDetail={AddHandler} shrinkHandle={shrinkHandler} />}
       
    </div>);
}

export default NewExpense;