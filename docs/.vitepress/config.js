const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

export default {
    title: '',
    description: 'Prodikt public documentation.',
    base: '/',
    lang: 'se-SV',
    themeConfig: {
        logo: 'public/logo_black.svg',
        siteTitle: false,
        sidebar: {
            '/': [
                {
                    text: 'Så fungerar Prodikt',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {text: 'Så funkar det', link: '/documentation/about/'},
                        {text: 'about', link: '/documentation/about/'},
                        {text: 'climate declaration', link: '/documentation/climate-declaration/'},
                    ]
                },
                {
                    text: 'System',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'Så här fungerar system', link: '/documentation/systems/'},
                    ]
                }
            ],

            '/changelog/': [
                {
                    text: 'changelog',
                    items: [
                        { text: 'Index', link: '/config/' },
                        { text: 'Three', link: '/config/three' },
                        { text: 'Four', link: '/config/four' }
                    ]
                }
            ]
        },
        nav: [
            { text: 'Dokumentation', link: '/documentation/' },
            { text: 'Versionshistorik', link: '/changelog/' }
        ],
        socialLinks: [
            { icon: 'facebook', link: 'https://www.facebook.com/prodikt1' },
            { icon: 'instagram', link: 'https://www.instagram.com/prodikt' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/company/prodikt' }
        ]
    }
}