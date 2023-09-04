import {Text, View} from "react-native"
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {

    const expensesContext = useContext(ExpenseContext);

    const recentExenses = expensesContext.expenses.filter((expense)=> {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expense.date > date7DaysAgo;

    })
    return (
        <ExpensesOutput 
            expenses={recentExenses} 
            expensesPeriod="Last 7 Days"
            fallbackText={"No expenses reigstered in last 7 days"}
            />
    )
}

export default RecentExpenses;