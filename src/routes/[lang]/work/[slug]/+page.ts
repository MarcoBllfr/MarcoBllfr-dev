import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params} ) =>{
    const { slug, lang } = params; 
    const rawProjects: SanityProject[] = await sanityClient.fetch(`*[_type == "project" && slug == $slug]`,{slug})

if (rawProjects.length !== 1){
    throw error(404, "Project not found");
}

let metadescription;

const project = processProjectEntries(rawProjects[0], lang as 'it' | 'en');

const projUrl = `https://www.marcobf.dev/${lang}/work/${project.slug}`;
return{
  lang,
    project,
      meta: {
    title: project.name,
    image:project.pojectImageUrl,
    metadescription:project.description,
    url:projUrl,
  }
}
}