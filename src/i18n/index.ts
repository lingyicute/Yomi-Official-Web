export const localeConfig = {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
} as const;

export type Locale = (typeof localeConfig.locales)[number]; 