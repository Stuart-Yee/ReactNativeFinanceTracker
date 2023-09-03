import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({expenses, expensesPeriod}) => {
    return(
        <View style={styles.constainer}>
            <ExpensesSummary
                expenses = {expenses} 
                periodName={expensesPeriod}
                />
            <ExpensesList 
                expenses ={expenses}
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