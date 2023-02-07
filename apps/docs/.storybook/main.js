const path = require('path')

module.exports = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    async viteFinal(config, { configType }) {
        return {
            ...config,
            resolve: {
                alias: [
                    {
                        find: '@mango-ui',
                        replacement: path.resolve(
                            __dirname,
                            '../../../packages/ui/'
                        ),
                    },
                ],
            },
        }
    },
}
