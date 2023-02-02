import React , {useState} from "react";
import dummyItems from './components/items';
import Expenses from './components/Expenses/Expenses';
import './components/Expenses.css';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter.js";


function App() {

  const [expenses,setExpenses] = useState(dummyItems);

  const AddHandler = (details) => {
    
    setExpenses(prev => {
      return [details, ...prev];
    });
    console.log(details);
    console.log(expenses);
   
  }

  return (
    <div>    
      <NewExpense addItem={AddHandler} />   
      <div className="expenses">
      <ExpensesFilter />
      {expenses.map( (curr) => {
       return (<Expenses title={curr.title} date={curr.date} amount={curr.amount} />);
        })}
      </div>
    
      
    </div>
  );
}

export default App;
