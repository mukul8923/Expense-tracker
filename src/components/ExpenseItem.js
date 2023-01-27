import './ExpenseItem.css';

function ExpenseItem() {
    return (<div className="expense-item">
        <div>
        <div>18th March 2022</div></div>
        <div className="expense-item__description">
            <h2>Course</h2>  
          <div className="expense-item__price">Rs. 5250</div>
        </div>
    </div>);
}

export default ExpenseItem;