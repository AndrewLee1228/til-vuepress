module.exports = {
    title: 'Today I Learn',
    description: 'TIL: Today I Learn',
    themeConfig: {
        sidebar:  [
            {
                title: 'koa',
                children: [
                    '/til/koa/introduce-koa',
                ],
            },
            {
                title: 'vuepress',
                children: [
                    '/til/vuepress/01-easy-start'
                ],
            },
            {
                title: 'webpack',
                children: [
                    '/til/webpack/how-to-setting-webpack'
                ],
            },
            {
                title: 'webRTC',
                children: [
                    '/til/webRTC/webRTC-tutorial'
                ],
            },
            {
                title: 'typeScript',
                children: [
                    '/til/TypeScript/01-TypeScript-overview',
                    '/til/TypeScript/02-building-ENV-and-using-compiler'
                ],
            },
        ]
    }
}