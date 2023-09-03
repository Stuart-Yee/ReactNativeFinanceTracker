import { createContext, useReducer } from "react";

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
    {
        id: "e11",
        description: "Book",
        amount: 22.99,
        date: new Date("2023-08-28T12:00:00.000-0700")
    },
    {
        id: "e12",
        description: "Book",
        amount: 22.99,
        date: new Date("2023-08-28T12:00:00.000-0700")
    },
    {
        id: "e13",
        description: "Book",
        amount: 22.99,
        date: new Date("2023-08-28T12:00:00.000-0700")
    },
]

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({decription, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
});

const expensesReducer = (state, action) => {
    switch (action.tyop) {
        case "ADD":
            const id = new Date().toString() + Math.random.toString();
            return [{...action.payload, id: id},...state]
        case "UPDATE":
            const updatableExpenseIndex = state.findIndex(
                (expense)=> expense.id === action.payload.id
                );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case "DELETE":
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

const ExpenseContextProvider = ({children}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    const addExpense = (expenseData) => {
        dispatch({type: "ADD", payload: expenseData});
    }

    const deleteExpense = (id) => {
        dispatch({type: "DELETE", payload: id});
    }

    const updateExpense = (id, expenseData) => {
        dispatch({type: "UPDATE", payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export default ExpenseContextProvider;