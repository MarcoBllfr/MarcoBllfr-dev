<script>

  import {HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection} from "$components";
  const {data} = $props();
  let {workExperience,projects, skills, education, lang,aboutMe} = data;
   import { t, locale, waitLocale } from "svelte-i18n";
</script>
<svelte:head>
  {#if $locale}
    <title>{$t(data.meta.title)}</title>
    <meta name="description" content={$t(data.meta.description)} />
    
    <meta property="og:title" content={$t(data.meta.title)} />
    <meta property="og:description" content={$t(data.meta.description)} />
  {/if}
</svelte:head>
<HeroSection />
<AboutMeSection {workExperience} {education} {aboutMe} {lang}/>
<MyWorkSection {projects} {lang}/>
<SkillsSection {skills}/>
<ContactSection />