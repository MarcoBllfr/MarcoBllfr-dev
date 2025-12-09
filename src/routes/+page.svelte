<script>

  import {HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection,Header} from "$components";
  const {data} = $props();
  let {workExperience,projects, skills, education,aboutMe} = data;
</script>
<HeroSection />
<AboutMeSection {workExperience}{education}{aboutMe}/>
<MyWorkSection {projects}/>
<SkillsSection {skills}/>
<ContactSection />