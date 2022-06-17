const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

export default {
  // These are app level configs.
  title: 'VitePressz',
  description: 'Vite & Vue powered static site generator.',
  base: '/prodikt-public-docs/',
  lang: 'se-SV',
  sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'about', link: '/about/' },
          { text: 'climate declaration', link: '/climate-declaration/' },
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'getting started', link: '/getting-started' },
        ]
      }
    ]
}