import { toast, Id } from 'react-toastify'
import { AUTO_CLOSE, THEME } from '../constants'

class Notification {
    loading(content: string) {
        return toast.loading(content, {closeOnClick: true})
    }

    success(toastId: Id, content: string) {
        return toast.update(toastId, {
            type: 'success',
            render: content,
            isLoading: false,
            autoClose: AUTO_CLOSE,
            theme: THEME
        })
    }

    error(toastId: Id, content: string) {
        return toast.update(toastId, {
            type: 'error',
            render: content,
            isLoading: false,
            autoClose: AUTO_CLOSE,
            theme: THEME
        })
    }
}

export default Notification