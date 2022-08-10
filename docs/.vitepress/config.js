const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

export default {
    // These are app level configs.
    title: '',
    description: 'Prodikt public documentation.',
    base: '/documentation',
    lang: 'se-SV',
    themeConfig: {
        logo: 'public/logo_black.svg',
        siteTitle: false,
        sidebar: {
            // This sidebar gets displayed when user is
            // under `guide` directory.
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

            // This sidebar gets displayed when user is
            // under `config` directory.
            '/changelog/': [
                {
                    text: 'changelog',
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: 'Index', link: '/config/' }, // /config/index.md
                        { text: 'Three', link: '/config/three' }, // /config/three.md
                        { text: 'Four', link: '/config/four' } // /config/four.md
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