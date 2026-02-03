<script>

  import {HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection} from "$components";
  const {data} = $props();
  let {workExperience,projects, skills, education, lang,aboutMe} = data;
 
</script>

<HeroSection />
<AboutMeSection {workExperience} {education} {aboutMe} {lang}/>
<MyWorkSection {projects} {lang}/>
<SkillsSection {skills}/>
<ContactSection />