import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      // Path=/ - Toda a aplicação pode acessar, se fosse Path=auth; apenas a rota auth poderia acessar
      'Set-Cookie': `token=; Path=/; max-age=0`,
    },
  })
}
