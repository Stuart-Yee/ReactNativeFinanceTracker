import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { useContext } from "react";

const AllExpenses = () => {
    const expensesContext = useContext(ExpenseContext);
    return <ExpensesOutput expensesPeriod="Total" expenses={expensesContext.expenses}/>
}

export default AllExpenses;