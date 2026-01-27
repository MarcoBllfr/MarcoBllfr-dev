import { createClient, type ClientConfig } from "@sanity/client";
import { PUBLIC_PROJECTID } from "$env/static/public";
import ImageUrlBuilder from "@sanity/image-url";
import { language } from '$lib/stores/storage';
import { get } from 'svelte/store';
const config: ClientConfig = {
  projectId: PUBLIC_PROJECTID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-25",
};


const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
  const builder = ImageUrlBuilder(sanityClient);
  const pojectImageUrl = builder.image(rawProject.image).url();

  const processedProject: ProcessedProject = {
    name: rawProject.name,
    company: rawProject.company,
    dateAccomplished: rawProject.dateAccomplished,
    stack: rawProject.stack,
    slug: rawProject.slug,
    pojectImageUrl,
    content: rawProject.content.map(processProjectContent),
    description: rawProject.description,
  };
  return processedProject;
}

function processProjectContent(content: RawTextContent | RawImgContent) {
  if (content._type === "block") {
    const blocks: ProcessedTextBlock[] = [];
    let currentText = "";

    content.children.forEach((span) => {
      const linkMark = span.marks?.find((mark) => {
        return content.markDefs?.some(
          (def) => def._key === mark && def._type === "link"
        );
      });

      if (linkMark) {
        if (currentText) {
          blocks.push({ type: "text", content: currentText });
          currentText = "";
        }

        const linkDef = content.markDefs?.find((def) => def._key === linkMark);

        if (linkDef && linkDef.href) {
          blocks.push({
            type: "link",
            content: span.text,
            href: linkDef.href,
          });
        } else {
          currentText += span.text;
        }
      } else {
        currentText += span.text;
      }
    });

    if (currentText) {
      blocks.push({ type: "text", content: currentText });
    }

    const processedTextContent: ProcessedTextContent = {
      type: "text",
      style: content.style,
      blocks: blocks,
    };

    return processedTextContent;
  } else {
    const builder = ImageUrlBuilder(sanityClient);
    const pojectImageUrl = builder.image(content).url();

    const processedImgContent: ProcessedImgContent = {
      type: "image",
      url: pojectImageUrl,
    };

    return processedImgContent;
  }

}


export function processAboutMe(
  
  rawAboutMe: SanityAboutMe,
   locale =get(language)
): string {
  return locale === 'it' 
    ? rawAboutMe.italianContent || ''
    : rawAboutMe.englishContent || '';
}