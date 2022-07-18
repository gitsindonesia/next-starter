import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';

interface Session {
    id?: string | number,
    name?: string,
    email?: string,
    role?: Array<string>,
}

export default async (req: NextRequest) => {
    const sessionToken: Session = await getToken({ req, secret: process.env.SECRET });

    if (!sessionToken) return NextResponse.rewrite(new URL('/auth/login', req.url));

    if (!sessionToken.role?.includes) return NextResponse.redirect(new URL('/', req.url));

    return NextResponse.next();
}