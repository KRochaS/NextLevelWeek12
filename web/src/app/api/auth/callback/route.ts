import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = redirectTo ?? new URL('/', request.url)
  const cookieExperiesInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectURL, {
    headers: {
      // Path=/ - Toda a aplicação pode acessar, se fosse Path=auth; apenas a rota auth poderia acessar
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExperiesInSeconds}`,
    },
  })
}
