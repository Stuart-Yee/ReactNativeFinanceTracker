import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "Pair of shoes (num1)",
        amount: 59.0,
        date: new Date("2022-12-01T12:00:00.000-0700")
    },
    {
        id: "e2",
        description: "Pair of pants",
        amount: 19.99,
        date: new Date("2023-08-19T12:00:00.000-0700")
    },
    {
        id: "e3",
        description: "Bananas",
        amount: 2.12,
        date: new Date("2023-08-22T12:00:00.000-0700")
    },
    {
        id: "e4",
        description: "Book",
        amount: 19.99,
        date: new Date("2023-08-11T12:00:00.000-0700")
    },
    {
        id: "e5",
        description: "Book",
        amount: 22.99,
        date: new Date("2022-08-28T12:00:00.000-0700")
    },
    {
        id: "e6",
        description: "Pair of shoes",
        amount: 59.99,
        date: new Date("2022-12-19T12:00:00.000-0700")
    },
    {
        id: "e7",
        description: "Pair of pants",
        amount: 19.99,
        date: new Date("2023-08-19T12:00:00.000-0700")
    },
    {
        id: "e8",
        description: "Bananas",
        amount: 2.12,
        date: new Date("2023-08-22T12:00:00.000-0700")
    },
    {
        id: "e9",
        description: "Book",
        amount: 19.99,
        date: new Date("2023-08-11T12:00:00.000-0700")
    },
    {
        id: "e10",
        description: "Book",
        amount: 22.99,
        date: new Date("2022-08-28T12:00:00.000-0700")
    },
]

const ExpensesOutput = ({expenses, expensesPeriod}) => {
    return(
        <View style={styles.constainer}>
            <ExpensesSummary
                expenses = {DUMMY_EXPENSES} 
                periodName={expensesPeriod}
                />
            <ExpensesList 
                expenses ={DUMMY_EXPENSES}
            />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    constainer: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1
    }

});