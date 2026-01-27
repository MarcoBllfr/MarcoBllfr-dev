<script>

  import {HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection} from "$components";
  const {data} = $props();
  let {workExperience,projects, skills, education} = data;
  let {title,description,image,url} = data.meta;
</script>
<svelte:head>
  <title>MarcoBf-Dev Home</title>
  <meta name="description" content={description}>
  <meta property="og:title" content={title}>
  <meta property="og:description" content={title}>
  <meta property="og:type" content="website">
  <meta property="og:url" content={url}>
  <meta property="og:locale" content="it_IT">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:image" content={image}>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content={image}>
  <meta name="twitter:title" content={title}>
  <meta name="twitter:description" content={title}>
  <meta name="og:site_name" content="MarcoBf-Dev">
</svelte:head>
<HeroSection />
<AboutMeSection {workExperience} {education} rawAboutMe={data.rawAboutMe} />
<MyWorkSection {projects}/>
<SkillsSection {skills}/>
<ContactSection />