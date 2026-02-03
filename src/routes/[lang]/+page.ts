import sanityClient, { processProjectEntries, processAboutMe } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({params}) => {
  const { lang } = params; 
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "devExperience"] | order(startDate desc)'
  );

  const rawProject: SanityProject[] = await sanityClient.fetch(
    '*[_type == "project"] | order(dateAccomplished desc)'
  );

  const skills: Skill[] = await sanityClient.fetch(
    '*[_type == "skills"][0].skillsList'
  );

  const education: SanityEducation[] = await sanityClient.fetch(
    '*[_type == "education"] | order(startDate desc)'
  );

  
  const rawAboutMe: SanityAboutMe = await sanityClient.fetch(
    '*[_type == "aboutMe"][0]'
  );
  
    const projects = rawProject.map(p => processProjectEntries(p, lang));
  


  const aboutMe = processAboutMe(rawAboutMe, lang);

  return {
    lang,
    workExperience,
    projects,
    skills,
    education,
    aboutMe, 
     meta: {
      title: 'MarcoBf-Dev Home',
      description: 'Il mio sito web personale e portfolio',
      image: 'https://www.marcobf.dev/og-home.webp',
      url: 'https://www.marcobf.dev/'
    },
    
  };
};