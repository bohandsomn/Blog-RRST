class Token {
    private readonly key = 'token'

    save(token: string): void {
        return localStorage?.setItem(this.key, token)
    }

    read(): string | null {
        return localStorage?.getItem(this.key) || null
    }
    
    delete(): void {
        return localStorage?.removeItem(this.key)
    }
}

const token = new Token()

export default token