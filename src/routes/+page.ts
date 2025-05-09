import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "devExperience"] | order(startDate desc)'
  );

  const rawProject:SanityProject[]= await sanityClient.fetch(
    '*[_type == "project"] | order(dateAccomplished desc) '
  );

  const skills: Skill[] = await sanityClient.fetch(
    '*[_type == "skills"][0].skillsList'
  );

  const education: SanityEducation[] = await sanityClient.fetch(
    '*[_type == "education"] | order(startDate desc)'
  );
  
  const projects=rawProject.map(processProjectEntries);
 

  return {
    workExperience,
    projects,
    skills,
    education,
  };
};


