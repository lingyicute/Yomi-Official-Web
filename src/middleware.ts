import createMiddleware from 'next-intl/middleware';
import {localeConfig} from "@/i18n/config";

export default createMiddleware({
    locales: localeConfig.locales,
    defaultLocale: localeConfig.defaultLocale
});

export const config = {
    matcher: ['/((?!api|_next|favicon.ico|images).*)']
};