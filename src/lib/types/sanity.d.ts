type SanityWorkExperience = {
  _id: string;
  _type: "devExperience";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  jobTitle?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  descrizione?:string;
  technologies?:string;
};

type SanityEducation = {
  _id: string
  _type: 'education'
  _createdAt: string
  _updatedAt: string
  _rev: string
  titolo?: string
  scuola?: string
  descrizione?: string
  startDate?: string
  endDate?: string
}

type SanityProject = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  company: string;
  slug: string;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  dateAccomplished: string;
  content: Array<RawTextContent | RawImgContent>;
  stack: Array<string>;
  description?:string;
};

interface RawTextContent {
  children: Array<{
    marks?: Array<string>;
    text: string;
    _type: "span";
    _key: string;
  }>;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}

interface RawImgContent {
  asset: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
  _key: string;
}

interface ProcessedProject {
  name: string;
  company: string;
  dateAccomplished: string;
  stack: string[];
  pojectImageUrl: string;
  slug: string;
  content: Array<ProcessedTextContent|ProcessedImgContent>;
  description?:string;
};


interface ProcessedTextBlock {
  type: "text" | "link";
  content: string;
  href?: string;
}

interface ProcessedTextContent {
  type: 'text';
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  blocks: ProcessedTextBlock[];
};

interface ProcessedImgContent {
  type: "image";
  url: string;
};

interface Skill {
  name: string
  iconClass: string
  _key: string
}

type SanityAboutMe = {
  _id: string;
  _type: "aboutMe";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  italianContent?: string;
  englishContent?: string;
};
interface ProcessedAboutMe {
  content: Array<ProcessedTextContent>;
}