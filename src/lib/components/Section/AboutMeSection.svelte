<script lang="ts">
    import { Button, SectionHeadline, ExperienceTable } from "$components";
    import image from "$assets/about-me.webp";
    import { goto } from "$app/navigation";
  
    function onclick() {
      goto("/#contact-form");
    }
  
    interface AboutMeProps {
      workExperience: SanityWorkExperience[];
      education: SanityEducation[];
    }
  
    let { workExperience, education }: AboutMeProps = $props();
  </script>
  
  <section class="about-me mt-l">
    <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
  
    <div class="mt-m content-container default-margin">
      <div class="image-wrapper">
        <img class="image" src={image} alt="Marco" />
      </div>
      <div class="text">
        <p>
          Ciao, sono <span class="important">Marco</span>, un <span class="important">web developer</span> con la passione per la tecnoligia e l'informatica.
          Progetto siti web che uniscono <span class="important">funzionalità e design</span>, usando
          alcuni framework come <span class="tech">Svelte</span> e <span class="tech">React</span>.
        </p>
        <p>
          Il mio percorso e interesse nella programazzione sono iniziati gia alle superiori e spinto dal desiderio di
          <span class="important">crescita continua</span> ho iniziato a studiare da vari
          linguaggi e <span class="important">framework</span>.
        </p>
        <p>
          Nel tempo libero esploro la stampa 3D, un hobby che mi permette di unire
          tecnologia e creatività, e che ha affinato la mia attenzione ai dettagli.
        </p>
        <p>
          In questo portfolio troverai i miei <span class="important">progetti più rilevanti</span> e una panoramica delle mie
          competenze tecniche. Sono sempre aperto a <em>nuove sfide</em> e collaborazioni!
        </p>
        <Button className="mt-m" {onclick}>Contattami</Button>
      </div>
    </div>
  
    <ExperienceTable {workExperience} {education} />
  </section>
  
  <style>
    .content-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      align-items: flex-start;
    }
  
    .image-wrapper {
      flex: 1 1 300px;
      max-width: 400px;
      display: flex;
      justify-content: center;
    }
  
    .image {
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 20px;
      object-fit: cover;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
  
    .text {
      flex: 1 1 320px;
      max-width: 600px;
      text-align: left;
      font-size: 1rem;
    }
  
    .text p {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  

  
    .text em {
      font-style: italic;
      color: #555;
    }
  
    .tech {
      font-weight: bold;
      background-color: #f3f3f3;
      padding: 0.15em 0.5em;
      border-radius: 6px;
      font-family: monospace;
      color: #ff3e00;
    }
  
    @media (max-width: 768px) {
      .content-container {
        flex-direction: row;
        gap: 2rem;
      }
  
      .image-wrapper {
        width: 80%;
        max-width: 250px;
      }
  
      .text {
        width: 100%;
        padding: 0 1rem;
        font-size: 0.95rem;
      }
  
      .text p {
        text-align: justify;
      }
    }
  
    @media (max-width: 480px) {
      .text {
        font-size: 0.9rem;
      }
  
      .tech {
        font-size: 0.85rem;
      }
  
      .image-wrapper {
        width: 50%;
        max-width: 200px;
        max-height: 250px;
        height: 50%;
      }
      .image {
        border-radius: 30%;
      }
    }
  </style>
  