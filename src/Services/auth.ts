interface Response {
    token: string,
    user: {
        name: string,
        email: string
    }
}

export function signIn(): Promise<Response> {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve({
                token: '655555dsdf4s6df4ss6d2f1e5s4d5f4sdfsd',
                user: {
                    name: 'Rhuan',
                    email: 'rhuan@teste.com'
                }
            })
        }, 100)
    } )
} 