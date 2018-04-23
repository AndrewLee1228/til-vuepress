module.exports = {
    title: 'J911',
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
            {
                title: 'data-communication',
                children: [
                    '/til/data-communication/01-introduction',
                    '/til/data-communication/02-network-models',
                    '/til/data-communication/03-data-and-signals',              
                    '/til/data-communication/04-digital-transmission',
                    '/til/data-communication/06-bandwidth-utilization',
                    '/til/data-communication/07-switching'             
                ]
            }
        ]
    }
}