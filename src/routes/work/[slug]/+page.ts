import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params} ) =>{
    const {slug} = params;
    const rawProjects: SanityProject[] = await sanityClient.fetch(`*[_type == "project" && slug == $slug]`,{slug})

if (rawProjects.length !== 1){
    throw error(404, "Project not found");
}

const project = processProjectEntries(rawProjects[0]);
const projUrl = `https://www.marcobf.dev/work/${project.slug}`;//url del progetto
return{
    project,
      meta: {
    title: project.name,
    image:project.pojectImageUrl,
    metadescription:project.description,
    url:projUrl,
  }
}
}