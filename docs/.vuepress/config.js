module.exports = {
    title: 'J911',
    description: 'J911의 기록',
    
    themeConfig: {
        locales: {
            '/': {
                nav: [
                  {
                    text: 'TIL',
                    link: '/til/',
                  },
                  {
                    text: 'Project',
                    link: '/project/',
                  },
                  {
                    text: 'Blog',
                    link: 'https://brunch.co.kr/@dareun',
                  },
                  {
                    text: 'Github',
                    link: 'https://github.com/j911',
                  },
                ],
                sidebar:  {
                    '/til/': [
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
                                '/til/TypeScript/02-building-ENV-and-using-compiler',
                                '/til/TypeScript/03-using-tslint'
                            ],
                        },
                        {
                            title: 'data-communication',
                            children: [
                                '/til/data-communication/01-introduction',
                                '/til/data-communication/02-network-models',
                                '/til/data-communication/03-data-and-signals',              
                                '/til/data-communication/04-digital-transmission',
                                '/til/data-communication/05-analog-transmission',
                                '/til/data-communication/06-bandwidth-utilization',
                                '/til/data-communication/07-switching',
                                '/til/data-communication/08-arp'
                            ]
                        }
                    ],
                    '/project/': [
                        {
                            title: 'Codeveloper',
                            children: [
                                '/project/codeveloper',
                            ],
                        },
                    ]
                },
            }
        },
    }
}