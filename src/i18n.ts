import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const localeConfig = {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
} as const;

export default getRequestConfig(async ({locale}) => {
    if (!localeConfig.locales.includes(locale as any)) notFound();

    const localeFile = await import(`./data/locales/${locale}.json`);
    const messages = localeFile.default || {};

    return {
        messages,
        timeZone: 'UTC'
    }
});