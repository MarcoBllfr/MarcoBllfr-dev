<script>

  import {HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection} from "$components";
  const {data} = $props();
  let {workExperience,projects, skills, education, lang,aboutMe} = data;
  let { title, description, image, url } = data.meta;
   import "$translation/index.js";
  import { t, locale, waitLocale } from "svelte-i18n";
  $locale = data.lang;
  $effect(() => {
    if ($locale !== data.lang) {
      $locale = data.lang;
    }
  });
</script>
<svelte:head>
  <title>{$t(title)}</title>
  <meta name="description" content={$t(description)} />
  <meta property="og:title" content={$t(title)} />
  <meta property="og:description" content={$t(title)} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:locale" content="it_IT" />
  <meta property="og:locale:alternate" content="en_US" />
  <meta property="og:image" content={image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:title" content={$t(title)} />
  <meta name="twitter:description" content={$t(description)} />
  <meta name="og:site_name" content="MarcoBf-Dev" />
    <link rel="alternate" hreflang="it" href="https://www.marcobf.dev/it" />
  <link rel="alternate" hreflang="en" href="https://www.marcobf.dev/en" />
  <link rel="alternate" hreflang="x-default" href="https://www.marcobf.dev/it" />
</svelte:head>
<HeroSection />
<AboutMeSection {workExperience} {education} {aboutMe} {lang}/>
<MyWorkSection {projects} {lang}/>
<SkillsSection {skills}/>
<ContactSection />