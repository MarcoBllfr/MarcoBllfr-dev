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

<HeroSection />
<AboutMeSection {workExperience} {education} {aboutMe} {lang}/>
<MyWorkSection {projects} {lang}/>
<SkillsSection {skills}/>
<ContactSection />