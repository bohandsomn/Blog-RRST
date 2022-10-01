class TokenRepository {
    private readonly key = 'token'

    save(token: string): void {
        return localStorage.setItem(this.key, token)
    }

    read(): string | null {
        return localStorage.getItem(this.key) || null
    }
    
    delete(): void {
        return localStorage.removeItem(this.key)
    }
}

const tokenRepository = new TokenRepository()

export default tokenRepository