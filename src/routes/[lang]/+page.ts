import sanityClient, { processProjectEntries, processAboutMe } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";


export const config = {
  isr: {
    expiration: 86400, //3 minuti: 180 1 ora: 3600 24 ore: 86400
  },
};

export const load: PageLoad = async ({ params }) => {
  const { lang } = params;

  const query = `{
    "workExperience": *[_type == "devExperience"] | order(startDate desc),
    "rawProject": *[_type == "project"] | order(dateAccomplished desc),
    "skills": *[_type == "skills"][0].skillsList,
    "education": *[_type == "education"] | order(startDate desc),
    "rawAboutMe": *[_type == "aboutMe"][0]
  }`;

  
  const data = await sanityClient.fetch(query);

 
  const projects = data.rawProject.map((p: any) => processProjectEntries(p, lang));
  const aboutMe = processAboutMe(data.rawAboutMe, lang);

  return {
   lang,
    workExperience: data.workExperience,
    projects,
    skills: data.skills,
    education: data.education,
    aboutMe,
     meta: {
      title: 'MarcoBf-Dev Home',
      description: 'Il mio sito web personale e portfolio',
      image: 'https://www.marcobf.dev/og-home.webp',
      url: 'https://www.marcobf.dev/'
    },
    
  };
};