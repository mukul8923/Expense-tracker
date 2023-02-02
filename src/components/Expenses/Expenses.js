import ExpenseItem from './ExpenseItem';


function Expenses(props){
   
    return (<div>
    <ExpenseItem title={props.title} date={props.date} amount={props.amount} />
    </div>);
}

export default Expenses;
