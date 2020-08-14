interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '123123',
        user: {
          name: 'test',
          email: 'test@test.com',
        }
      })
    }, 2000)
  })
}
