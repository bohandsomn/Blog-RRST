import type { UserDTO } from '../utility/interface'
import { commentatorMock } from '../__mock__'

const useUser = (userId: UserDTO['id']): UserDTO => {
    return commentatorMock
}

export default useUser