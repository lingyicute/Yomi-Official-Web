import createMiddleware from 'next-intl/middleware';
import {localeConfig} from './i18n';

export default createMiddleware({
    locales: localeConfig.locales,
    defaultLocale: localeConfig.defaultLocale,
    localePrefix: 'always'
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};