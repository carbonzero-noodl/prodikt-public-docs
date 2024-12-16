const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

export default {
    // These are app level configs.
    title: 'Prodikt Docs',
    description: 'Prodikt public documentation.',
    base: '/',
    lang: 'se-SV',
    themeConfig: {
        logo: '/logo_green.svg',
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
                        {text: 'Information & support', link: '/documentation/navigera/information_support/'},
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
                        {text: 'Byggsystem', link: '/documentation/funktioner/byggsystem/'},
                        {text: 'Skapa produkt', link: '/documentation/funktioner/skapa_produkt/'},
                    ]
                },
                {
                    text: 'Klimatdeklaration',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'Introduktion', link: '/documentation/klimatdeklaration/'},
                        {text: 'Så här gör du', link: '/documentation/klimatdeklaration/sa_har_gor_du/'},
                    ]
                },
                {
                    text: 'BIM',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {text: 'BIM-Manual', link: 'https://docs.prodikt.com/bim/manual.pdf'},
                    ]
                },
                
        ],
        nav: [
            { text: 'Öppna Prodikt', link: 'https://app.prodikt.com' },
            //{ text: 'Versionshistorik', link: '/changelog/' }
        ],
        socialLinks: [
            { icon: 'facebook', link: 'https://www.facebook.com/prodikt1' },
            { icon: 'instagram', link: 'https://www.instagram.com/prodikt' },
            { icon: 'youtube', link: 'https://www.youtube.com/@prodikt' },
            { icon: 'twitter', link: 'https://www.twitter.com/@prodiktofficial' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/company/prodikt' }
        ]
    }
}
