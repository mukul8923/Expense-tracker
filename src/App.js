import React , {useState} from "react";
import dummyItems from './components/items';
import './components/Expenses.css';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter.js";
import YearlyExpense from "./components/YearlyExpenses/YearlyExpense";


function App() {

  const [expenses,setExpenses] = useState(dummyItems);

  const AddHandler = (details) => {
    
    setExpenses(prev => {
      return [details, ...prev];
    });
    console.log(details);
    console.log(expenses);
   
  }
  const [yearExpense,setYearExpense] = useState(dummyItems);
  const showYearly = selectedYear => {
    const YearlyExpense = expenses.filter(expense => {
      return (expense.date.getFullYear().toString() === selectedYear);
    });

    setYearExpense(YearlyExpense);
  }

  return (
    <div>    
      <NewExpense addItem={AddHandler} />   
      <div className="expenses">
      <ExpensesFilter currYear={showYearly} />
      <YearlyExpense yearExpenses={yearExpense} />
      
      </div>
    
      
    </div>
  );
}

export default App;
