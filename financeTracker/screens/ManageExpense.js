import { useContext, useLayoutEffect } from "react";
import { TextInput, Text, View, StyleSheet } from "react-native"
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
    const expensesContext = useContext(ExpenseContext);


    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense =expensesContext.expenses.find(expense=>expense.id === editedExpenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing])

    const deleteExpenseHandler = () => {
        expensesContext.deleteExpense(editedExpenseId);
        navigation.goBack();
     }

    const cancelHandler = () => {
        navigation.goBack();
     }

    const confirmHandler = (newData) => { 
        // const newData =     {
        //     id: "e1",
        //     description: "New item",
        //     amount: 24.9,
        //     date: new Date()
        // } // will supply new data with input
        isEditing ?
            expensesContext.updateExpense(editedExpenseId, newData) : 
            expensesContext.addExpense(newData)
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm 
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                submitButtonLabel={isEditing? "Update": "Add New"}
                defaultValues={selectedExpense}
                />
            {isEditing && <View style={styles.deleteContainer}>
                <IconButton
                    icon="trash"
                    color={GlobalStyles.colors.error500}
                    size={36}
                    onPress={deleteExpenseHandler}
                />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    }
})

export default ManageExpense;