const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

export default {
  // These are app level configs.
  title: 'VitePressdz',
  description: 'Vite & Vue powered static site generator.',
  base: '/',
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