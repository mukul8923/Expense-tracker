import items from './components/items';
import Expenses from './components/Expenses/Expenses';
import './components/Expenses.css';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter.js";


function App() {
  return (
    <div>    
      <NewExpense />   
      <div className="expenses">
      <ExpensesFilter />
      {items.map( (curr) => {
       return (<Expenses title={curr.title} date={curr.date} amount={curr.amount} />);
        })}
      </div>
    
      
    </div>
  );
}

export default App;
