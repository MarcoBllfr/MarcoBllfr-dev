import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";


const supportedLangs = ['it', 'en'];
const defaultLang = 'it';


export const load: PageLoad = async ({ params }) => {
   const { lang } = params;
   
  if (!supportedLangs.includes(lang)) {
    throw redirect(302, `/${defaultLang}`);
  }
 
  return {
    lang,
     meta: {
      title: 'meta.title',
      description: 'meta.description',
      image: 'https://www.marcobf.dev/og-home.webp',
      url: `https://www.marcobf.dev/${lang}`
    },
  };
};