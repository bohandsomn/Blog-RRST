import { renderHook } from '@testing-library/react-hooks'
import useStyles from '.'

describe('useStyles', () => {
    test('should return valid className', () => {
        const FIRST_CLASS_NAME = 'FIRST_CLASS_NAME'
        const SECOND_CLASS_NAME = 'SECOND_CLASS_NAME'
        const { result } = renderHook(() => useStyles(FIRST_CLASS_NAME, SECOND_CLASS_NAME))

        expect(result.current).toBe('FIRST_CLASS_NAME SECOND_CLASS_NAME')
    })
})