import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
const supportedLangs = ['it', 'en'];
const defaultLang = 'it';
export const load: PageLoad = async ({ params,request }) => {
   const { lang } = params;
   if (!supportedLangs.includes(lang)) {
    const acceptLanguage = request.headers.get('accept-language');
    let browserLang = defaultLang;
    
    if (acceptLanguage) {
      const primaryLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      if (supportedLangs.includes(primaryLang)) {
        browserLang = primaryLang;
      }
    }
    
    throw redirect(302, `/${browserLang}`);
  }
  return {
    lang,
     meta: {
      title: 'MarcoBf-Dev Home',
      description: 'Il mio sito web personale e portfolio',
      image: 'https://www.marcobf.dev/og-home.webp',
      url: 'https://www.marcobf.dev/'
    },
  };
};