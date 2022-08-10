const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

export default {
  // These are app level configs.
  title: 'Prodikt',
  description: 'Vite & Vue powered static site generator.',
  base: '/documentation',
  lang: 'se-SV',
    sidebar: [
        {
            text: 'Guide',
            items: [
                { text: 'Introduction', link: '/introduction' },
                { text: 'Getting Started', link: '/getting-started' },
            ]
        }
    ]
}