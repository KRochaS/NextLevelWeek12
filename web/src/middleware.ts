// Interceptar o acesso do usuário a alguma rota.

import { NextRequest, NextResponse } from 'next/server'

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

// Backend-for-frontend
// Backend que não é responsável por fazer consultas no banco de dados.
// Mas sim, possibilitar o front-end de trabalhar com questões que não seria
// possível no Browser. Como cookies, HttpOnly, middleware

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        // Path=/ - Toda a aplicação pode acessar, se fosse Path=auth; apenas a rota auth poderia acessar
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20`,
      },
    })
  }

  return NextResponse.next()
}

// matcher - em quais endereços da aplicação obrigatóriamente
// o usuário precisa estar logado para acessar
export const config = {
  matcher: '/memories/:path*',
}
