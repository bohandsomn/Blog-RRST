import DataConverter from './DataConverter'

describe('DataConverter', () => {
    test('should get a ISO string', () => {
        expect(DataConverter.getISO(new Date(2022, 9, 29))).toBe('2022-10-28 21:00:00.000Z')
    })

    test('should get a DateMonthNameDataYear string', () => {
        expect(DataConverter.getDateMonthNameDataYear(new Date(2022, 9, 29))).toBe('Октябрь, 29/2022')
    })

    test('should get a MonthDateYear string', () => {
        expect(DataConverter.getMonthDateYear(new Date('2022-10-28T21:00:00.000Z'))).toBe('10/29/2022')
    })
})