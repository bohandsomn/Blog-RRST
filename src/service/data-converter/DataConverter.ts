class DataConverter {
    private static toPascalCase(month: string) {
        const block = "\\w\\u0400-\\u04FF"
        const regExp = new RegExp("([^" + block + "]|^)([" + block + "])", "g")
        return month.replace(regExp, (_, first, second) => { 
            return first + second.toUpperCase()
        })
    }

    static getISO(date: Date) {
        return date.toISOString().replace(/T/, ' ')
    }

    static getDateMonthNameDataYear(date: Date) {
        const month = date.toLocaleString('default', { month: 'long' })
        const dataOfMonth = date.getDate()
        const year = date.getFullYear()
        return `${this.toPascalCase(month)}, ${dataOfMonth}/${year}`
    }

    static getMonthDateYear(date: Date) {
        const dataOfMonth = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        return `${month + 1}/${dataOfMonth}/${year}`
    }
}

export default DataConverter