const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

export default {
    // These are app level configs.
    title: '',
    description: 'Prodikt public documentation.',
    base: '/',
    lang: 'se-SV',
    themeConfig: {
        logo: '/logo_black.svg',
        siteTitle: false,
        sidebar: [
           {
                    text: 'Det här är Prodikt',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {text: 'Det här är Prodikt', link: '/documentation/kom_igang/'},
                        {text: 'Navigerar', link: '/documentation/navigera/'},
                    ]
                },
                {
                    text: 'Klimatdeklaration',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'Klimatdeklaration', link: '/documentation/klimatdeklaration/Klimatdeklaration'},
                    ]
                },
                {
                    text: 'Funktioner',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'Funktioner', link: '/documentation/funktioner/'},
                    ]
                },
        ],
        nav: [
            //{ text: 'Dokumentation', link: '/documentation/' },
            //{ text: 'Versionshistorik', link: '/changelog/' }
        ],
        socialLinks: [
            { icon: 'facebook', link: 'https://www.facebook.com/prodikt1' },
            { icon: 'instagram', link: 'https://www.instagram.com/prodikt' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/company/prodikt' }
        ]
    }
}