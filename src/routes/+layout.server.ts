import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  return {
     meta: {
      title: 'MarcoBf-Dev Home',
      description: 'Il mio sito web personale e portfolio',
      image: 'https://www.marcobf.dev/og-home.webp',
      url: 'https://www.marcobf.dev/'
    },
  };
};