<script>

  import {HeroSection, AboutMeSection, MyWorkSection, SkillsSection, ContactSection,Header} from "$components";
  const {data} = $props();
  let {workExperience,projects, skills, education} = data;
</script>
<HeroSection />
<AboutMeSection {workExperience} {education} rawAboutMe={data.rawAboutMe} />
<MyWorkSection {projects}/>
<SkillsSection {skills}/>
<ContactSection />