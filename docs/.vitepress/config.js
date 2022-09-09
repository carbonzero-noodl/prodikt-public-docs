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
                    text: 'Kom igång',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'Kom igång', link: '/documentation/kom_igang/kom_igang/'},
                        {text: 'Skapa konto', link: '/documentation/kom_igang/skapa_ett_konto/'},
                        {text: 'Testa demoprojektet', link: '/documentation/kom_igang/testa_demoprojektet/'},
                        {text: 'Produktsida', link: '/documentation/kom_igang/produktsida/'},
                        {text: 'Samarbeta', link: '/documentation/kom_igang/samarbeta/'},
                        {text: 'Sökresultat', link: '/documentation/kom_igang/sokresultat/'},
                    ]
                },
                {
                    text: 'Navigera',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'Huvudmeny', link: '/documentation/navigera/huvudmeny/'},
                        {text: 'Efterfråga produkter', link: '/documentation/navigera/efterfraga_produkter/'},
                        {text: 'Information & support', link: '/documentation/navigera/information_&_support/'},
                        {text: 'Tillverkare-inloggning', link: '/documentation/navigera/tillverkare_inloggning/'}
                    ]
                },
                {
                    text: 'Funktioner',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'Introduktion', link: '/documentation/funktioner/introduktion/'},
                        {text: 'Exportera projekt', link: '/documentation/funktioner/exportera_projekt/'},
                        {text: 'Importera projekt', link: '/documentation/funktioner/importera_projekt/'},
                        {text: 'Samarbeta', link: '/documentation/funktioner/samarbeta/'},
                        {text: 'Sök & filtrera', link: '/documentation/funktioner/sok_och_filtrera/'},
                    ]
                },
                {
                    text: 'Klimatdeklaration',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'Introduktion', link: '/documentation/klimatdeklaration/'},
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