import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const supportedLangs = ['it', 'en']; 
const defaultLang = 'it';

export const load: PageServerLoad = ({ request }) => {

  const acceptLanguage = request.headers.get('accept-language');
  
  let browserLang = defaultLang;
  
  if (acceptLanguage) {
   
    const primaryLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
    
    
    if (supportedLangs.includes(primaryLang)) {
      browserLang = primaryLang;
    }
  }
  
  throw redirect(302, `/${browserLang}`);
};