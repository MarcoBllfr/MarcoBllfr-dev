<script>

  import {HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection} from "$components";
  const {data} = $props();
  let {workExperience,projects, skills, education} = data;
</script>

<svelte:head>
  <title>MarcoBf-Dev Home</title>
  <meta name="description" content="Il mio sito web personale e portfolio">
  <meta property="og:title" content="MarcoBf-Dev Home">
  <meta property="og:description" content="Il mio sito web personale e portfolio">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.marcobf.dev/">
  <meta property="og:locale" content="it_IT">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:image" content="https://www.marcobf.dev/og-home.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://www.marcobf.dev/og-home.webp">
  <meta name="twitter:title" content="MarcoBf-Dev Home">
  <meta name="twitter:description" content="Il mio sito web personale e portfolio">
  <meta name="og:site_name" content="MarcoBf-Dev">
</svelte:head>

<HeroSection />
<AboutMeSection {workExperience} {education} rawAboutMe={data.rawAboutMe} />
<MyWorkSection {projects}/>
<SkillsSection {skills}/>
<ContactSection />