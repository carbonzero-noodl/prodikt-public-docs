import { loadEnv } from "vitepress";
const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

const fetchSidebar = async () => {
  const env = loadEnv("", process.cwd());
  const token = env.VITE_DATO_API_TOKEN;

  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: /* GraphQL */ `
        {
          allPages {
            category {
              id
            }
            id
            title
            slug
            order
          }
          allCategories {
            id
            title
            slug
            order
          }
        }
      `,
    }),
  });

  const { data } = await response.json();

  const categories = data.allCategories
    .sort((a, b) => (a.order > b.order ? 1 : -1))
    .map((category) => {
      return {
        text: category.title,
        collapsible: true,
        collapsed: true,
        items: data.allPages
          .filter((page) => page.category.id === category.id)
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((page) => ({
            text: page.title,
            link: `/documentation/${page.slug}`,
          })),
      };
    });

  return categories;
};

export default (async () => ({
  // These are app level configs.
  title: "Prodikt Docs",
  description: "Prodikt public documentation.",
  base: "/",
  lang: "se-SV",
  themeConfig: {
    logo: "/logo_green.svg",
    siteTitle: false,
    sidebar: await fetchSidebar(),
    nav: [
      { text: "Öppna Prodikt", link: "https://app.prodikt.com" },
      //{ text: 'Versionshistorik', link: '/changelog/' }
    ],
    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/prodikt1" },
      { icon: "instagram", link: "https://www.instagram.com/prodikt" },
      { icon: "youtube", link: "https://www.youtube.com/@prodikt" },
      { icon: "twitter", link: "https://www.twitter.com/@prodiktofficial" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/prodikt" },
    ],
  },
}))();
