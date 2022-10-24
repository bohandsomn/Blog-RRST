import { renderHook, act } from '@testing-library/react-hooks'
import useFetch from './useFetch'

type Data = {
    id: number
    name: string
    surname: string | null
}

describe('useFetch', () => {
    const DATA: Data = {
        id: 1,
        name: 'Bohdan',
        surname: null
    }
    const ERROR = 'ERROR MESSAGE'

    test('should be initial state', () => {
        const { result } = renderHook(() => useFetch<Data>())
      
        expect(result.current.data).toBeNull()
        expect(result.current.previous).toBeNull()
        expect(result.current.isLoading).toBeTruthy()
        expect(result.current.error).toBeNull()
    })

    test('should be succeeded state', () => {
        const { result } = renderHook(() => useFetch<Data>())

        act(() => {
            result.current.onSuccess(DATA)
        })
      
        expect(result.current.data).toEqual(DATA)
        expect(result.current.previous).toBeNull()
        expect(result.current.isLoading).toBeFalsy()
        expect(result.current.error).toBeNull()
    })

    test('should be rejected state', () => {
        const { result } = renderHook(() => useFetch<Data>())

        act(() => {
            result.current.onReject(ERROR)
        })
      
        expect(result.current.data).toBeNull()
        expect(result.current.previous).toBeNull()
        expect(result.current.isLoading).toBeFalsy()
        expect(result.current.error).toBe(ERROR)
    })

    test('should be pending state', () => {
        const { result } = renderHook(() => useFetch<Data>())

        act(() => {
            result.current.onPending()
        })
      
        expect(result.current.data).toBeNull()
        expect(result.current.previous).toBeNull()
        expect(result.current.isLoading).toBeTruthy()
        expect(result.current.error).toBeNull()
    })

    test('should contains previous state', () => {
        const { result } = renderHook(() => useFetch<Data>())

        act(() => {
            result.current.onSuccess(DATA)
            result.current.onReject(ERROR)
        })
      
        expect(result.current.data).toBeNull()
        expect(result.current.previous).toEqual(DATA)
        expect(result.current.isLoading).toBeFalsy()
        expect(result.current.error).toBe(ERROR)
    })

    test('should contains previous state after reloading', () => {
        const { result } = renderHook(() => useFetch<Data>())

        act(() => {
            result.current.onSuccess(DATA)
            result.current.onReject(ERROR)
            result.current.onReject(ERROR)
        })
      
        expect(result.current.data).toBeNull()
        expect(result.current.previous).toEqual(DATA)
        expect(result.current.isLoading).toBeFalsy()
        expect(result.current.error).toBe(ERROR)
    })
})