import { loadEnv } from "vitepress";

export default {
  async paths() {
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
              id
              slug
              body
              order
            }
          }
        `,
      }),
    });

    const { data } = await response.json();

    const paths = data.allPages
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .map((page) => ({
        params: {
          slug: page.slug,
        },
        content: page.body,
      }));

    return paths;
  },
};
