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
                            title: 'Koa',
                            children: [
                                '/til/Koa/introduce-koa',
                            ],
                        },
                        {
                            title: 'Vuepress',
                            children: [
                                '/til/Vuepress/01-easy-start'
                            ],
                        },
                        {
                            title: 'Webpack',
                            children: [
                                '/til/Webpack/how-to-setting-webpack'
                            ],
                        },
                        {
                            title: 'Tensorflow',
                            children: [
                                '/til/Tensorflow/tensorflow-install'
                            ]
                        },
                        {
                            title: 'WebRTC',
                            children: [
                                '/til/WebRTC/webRTC-tutorial'
                            ],
                        },
                        {
                            title: 'TypeScript',
                            children: [
                                '/til/TypeScript/01-TypeScript-overview',
                                '/til/TypeScript/02-building-ENV-and-using-compiler',
                                '/til/TypeScript/03-using-tslint',
                                '/til/TypeScript/04-compiler-option'
                            ],
                        },
                        {
                            title: 'Data-communication',
                            children: [
                                '/til/Data-communication/01-introduction',
                                '/til/Data-communication/02-network-models',
                                '/til/Data-communication/03-data-and-signals',              
                                '/til/Data-communication/04-digital-transmission',
                                '/til/Data-communication/05-analog-transmission',
                                '/til/Data-communication/06-bandwidth-utilization',
                                '/til/Data-communication/07-switching',
                                '/til/Data-communication/08-arp'
                            ]
                        },
                        {
                            title: 'Algorism',
                            children: [
                                '/til/Algorism/HashTable'
                            ]
                        },
                        {
                            title: 'DR',
                            children: [
                                '/til/DR/',
                            ],
                        },
                        {
                            title: 'Etc',
                            children: [
                                '/til/Etc/install-zsh'
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