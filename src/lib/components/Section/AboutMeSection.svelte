<script lang="ts">

  import { Button, SectionHeadline,ExperienceTable } from "$components";
  import image from "$assets/about-me.jpeg";
  import { goto } from "$app/navigation";
  function onclick(){
    goto("/#contact-form");
  }

  interface AboutMeProps{
    workExperience : SanityWorkExperience[];
    education : SanityEducation[];
  }
  let {workExperience, education}: AboutMeProps= $props();
</script>

<section class="about-me mt-l ">
  <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="" />
    <div class="text">
      <p>
        Ciao, sono Marco, sviluppatore web con la passione per creare esperienze digitali intuitive e funzionali.
        Il mio percorso nel mondo dello sviluppo è guidato dalla curiosità e dal desiderio costante di apprendimento. Lavoro con diversi linguaggi e framework per realizzare soluzioni web su misura per ogni esigenza.
        Quando non sono al computer, mi dedico alla stampa 3D, hobby che unisce la mia passione per la tecnologia con la creatività. Questa attività ha affinato la mia precisione e capacità di problem-solving, qualità che porto anche nei miei progetti di sviluppo.
        In questo portfolio troverai una selezione dei miei lavori più significativi e una panoramica delle mie competenze tecniche. Sono sempre aperto a nuove collaborazioni e sfide interessanti!
      </p>
      <Button className="mt-m" {onclick}>Contattami</Button>
    </div>
  </div>
  <ExperienceTable {workExperience}{education}/>
</section>
<style>
    .content-container {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
    }
  
    .image {
      width: 42%;
      border-radius: 20px;
      object-fit: cover;
    }
  
    .text {
      width: 55%;
      text-align: left;
    }
  </style>
