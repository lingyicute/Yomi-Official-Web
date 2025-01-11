import {NextResponse} from 'next/server';
import {createMiddleware} from 'next-intl';
import {localeConfig} from "@/i18n/config";

export default function middleware(request: Request) {
    const handler = createMiddleware({
        locales: localeConfig.locales,
        defaultLocale: localeConfig.defaultLocale,
        localePrefix: 'as-needed'
    });
    return handler(request);
}

export const config = {
    matcher: ['/((?!api|_next|favicon.ico|images|.*\\..*).*)']
};