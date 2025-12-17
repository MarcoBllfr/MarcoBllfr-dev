import sanityClient, { processProjectEntries, processAboutMe } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";
import { get } from 'svelte/store';
import { language } from '$lib/stores/storage';

export const load: PageLoad = async () => {
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
  
  const projects = rawProject.map(processProjectEntries);
  

  const locale =get(language);
  const aboutMe = processAboutMe(rawAboutMe, locale);

  return {
    workExperience,
    projects,
    skills,
    education,
    aboutMe, 
  };
};