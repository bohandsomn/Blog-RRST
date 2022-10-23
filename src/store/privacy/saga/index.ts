import createWatcher from './create'
import getManyWatcher from './getMany'

const privacySaga = {
    create: createWatcher,
    getMany: getManyWatcher
}

export default privacySaga