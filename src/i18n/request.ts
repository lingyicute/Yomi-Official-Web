import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {localeConfig} from './index';

export default getRequestConfig(async ({locale}) => {
    if (!localeConfig.locales.includes(locale as any)) notFound();

    const localeFile = await import(`../data/locales/${locale}.json`);
    const messages = localeFile.default || {};

    return {
        messages,
        timeZone: 'UTC'
    }
}); 