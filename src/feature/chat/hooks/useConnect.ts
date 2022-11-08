import { useCallback, useContext, useMemo } from 'react'
import useAppSelector from '../../../hooks/useAppSelector'
import { authorizationSelector } from '../../../store'
import useToggle from '../../../hooks/useToggle'
import ChatContext from '../context/chat'
import { messageAPI } from '../api'

const useConnect = () => {
    const [isConnected, , handleSetTrueConnected, handleSetFalseConnected] = useToggle(false)
    const chat = useContext(ChatContext)
    const user = useAppSelector(authorizationSelector)

    const handleJoinRoom = useCallback(() => {
        if (chat.data?.id === undefined || user.data?.id === undefined) {
            return
        }
        messageAPI.joinRoom({ chatId: chat.data.id })
        handleSetTrueConnected()
    }, [chat.data?.id, user.data?.id, handleSetTrueConnected])

    const handleLeaveRoom = useCallback(() => {
        if (chat.data?.id === undefined) {
            return
        }
        messageAPI.leaveRoom({ chatId: chat.data.id })
        handleSetFalseConnected()
    }, [chat.data?.id, handleSetFalseConnected])

    return useMemo(() => ({
        isConnected,
        handleJoinRoom,
        handleLeaveRoom
    }), [isConnected, handleJoinRoom, handleLeaveRoom])
}

export default useConnect