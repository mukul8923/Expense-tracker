import React ,{useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(){

    // const [expenseTitle,setExpenseTitle] = useState('');
    // const [expenseAmount,setExpenseAmount] = useState('');
    // const [expenseDate,setExpenseDate] = useState('');

    const [ExpenseDetail ,setExpenseDetail] = useState({
        title: '',
        amount:'',
        date:''
    });


    const ExpenseDetailFill = (event) =>{
        const {value , name} = event.target;
        
        setExpenseDetail( (prevDetail) => {
            return {...prevDetail,
            [name]: value}
        });

    }

    // const TitleHandler = (event) => {
    //     const title = event.target.value;
    //     setExpenseTitle(title);
       
    // }

    // const AmountHandler = (event) => {
    //     const amount = event.target.value;
    //     setExpenseAmount(amount);
       
    // }

    // const DateHandler = (event) => {
    //     const date = event.target.value;
    //     setExpenseDate(date);
       
    // }


    const ExpenseHandler = (event) => {
        event.preventDefault();


        console.log(ExpenseDetail);

        setExpenseDetail({title: '', amount: '', date:''});

        // const Expenses = {
        //     title: expenseTitle,
        //     amount: expenseAmount,
        //     date: expenseDate
        // };

        // console.log(Expenses);

        // setExpenseTitle('');
        // setExpenseAmount('');
        // setExpenseDate('');
    }

    return (<div className="new-expense__control">
        <form onSubmit={ExpenseHandler}>
        <div>
        <label>Title</label>
            <input type="text" value={ExpenseDetail.title} name="title" onChange={ExpenseDetailFill} />
        </div>
           <div>
           <label>Amount</label>
            <input type ="number" value={ExpenseDetail.amount} name="amount" onChange={ExpenseDetailFill} />
            </div>
            <div>
            <label>Date</label>
            <input type = "date" value={ExpenseDetail.date} name="date" min="2020-01-01"  max="2023-01-31"  onChange={ExpenseDetailFill} />
            </div>
            <button type="submit">Submit</button>
        </form>

    </div>);
}

export default ExpenseForm;