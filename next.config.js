const withNextIntl = require('next-intl/plugin')(
    './src/i18n/request.ts'
);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withBundleAnalyzer(withNextIntl({
    output: 'export',
    webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        if (!dev && !isServer) {
            config.plugins.push(
                new CompressionPlugin({
                    algorithm: 'gzip',
                    test: /\.(js|css|html|svg)$/,
                    threshold: 10240,
                    minRatio: 0.8,
                })
            );
        }

        return config;
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
        ],
        dangerouslyAllowSVG: true
    },
    swcMinify: true,
    reactStrictMode: true,
    poweredByHeader: false,
}));
