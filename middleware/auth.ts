// import { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'
// import { getToken, JWT } from 'next-auth/jwt'

// interface Session {
// 	id?: string | number
// 	name?: string
// 	email?: string
// 	role?: Array<string>
// }

// export default async (req: NextRequest) => {
// 	const session: Session = await getToken({ req, secret: process.env.SECRET })

// 	if (!session) return
// 	else if (session.role?.includes('admin'))
// 		return NextResponse.redirect(new URL('/admin', req.url))

// 	return NextResponse.redirect(new URL('/', req.url))
// }

export {}
