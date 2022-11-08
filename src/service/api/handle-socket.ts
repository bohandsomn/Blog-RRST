import { io } from 'socket.io-client'

class HandleSocket {
    readonly socket = io(process.env.NEXT_PUBLIC_BASE_URL!)

    constructor() {
        this._connect()
    }

    private _connect() {
        this.socket.on('connect', () => {
            if (this.socket.connected) {
                return
            }
            this._connect()
        })
    }

    protected json<Request, Response>(event: string, request: Request) {
        this.socket.emit(event, request)
        return (callback: (response: Response) => any) => {
            this.socket.once(event, callback)
        }
    }
}

export default HandleSocket