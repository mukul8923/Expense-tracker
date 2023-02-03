import Expenses from "../Expenses/Expenses";
import './YearlyExpense.css';

function YearlyExpense(props){
   
    return (
        <div>
        <div className="expenses-list">
        {props.yearExpenses.length === 0 && <h2 className="expenses-list__fallback">Nothing to show here!</h2>}
        </div>
          {props.yearExpenses.map( (curr) => {
       return (<Expenses title={curr.title} date={curr.date} amount={curr.amount} />);
        })}
        </div>
    );
}

export default YearlyExpense;