import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/session";

// In Next.js 16, Middleware is called Proxy. This refreshes the Supabase
// session cookie on each request and gates the /admin area.
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // Run on everything except static assets and image files.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
