export const getFormattedDate = (date) => {
    const dateStringArr = date.toString().split(" ")
    // return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    return `${dateStringArr[0]} ${dateStringArr[1]} ${dateStringArr[2]} ${dateStringArr[3]}`
}