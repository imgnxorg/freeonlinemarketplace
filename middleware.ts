import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { isAuthenticated } from ''

const isAuthenticated = (request: NextRequest) => {
    return false
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (!isAuthenticated(request)) {
        // Respond with JSON indicating an error message
        return Response.json(
            { success: false, message: 'authentication failed' },
            { status: 401 }
        )
    }
    return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
}
