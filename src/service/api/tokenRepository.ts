class TokenRepository {
    private readonly key = 'token'

    save(token: string): void {
        try {
            return localStorage.setItem(this.key, token)
        } catch (error) { }
    }

    read(): string | null {
        try {
            return localStorage.getItem(this.key) || null
        } catch (error) {
            return null
        }
    }
    
    delete(): void {
        try {
            return localStorage.removeItem(this.key)
        } catch (error) { }
    }
}

const tokenRepository = new TokenRepository()

export default tokenRepository