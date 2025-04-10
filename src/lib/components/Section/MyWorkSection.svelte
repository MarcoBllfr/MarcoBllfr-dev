<script lang="ts">
  import { SectionHeadline } from "$components";

  interface MyworksProps {
    projects: ProcessedProject[];
  }

  let { projects }: MyworksProps = $props();

  const mainProject = projects[0];
  const otherProject = projects.slice(1);
</script>

<section class="mt-l">
  <SectionHeadline sectionName="my-work">My Work</SectionHeadline>
  <div class="default-margin projects-container mt-m">
    <article class="main-project mb-m">
      <a href={`/work/${mainProject.slug}`}>
        <img src={mainProject.pojectImageUrl} alt={mainProject.name} />
      </a>
      <div class="project-info mt-s">
        <div class="title-and-company">
          <h3 class="semi-bold">
            {mainProject.name}
          </h3>
          <p class="company dark-grey">{mainProject.company}</p>
        </div>
        <a href={`/work/${mainProject.slug}`} class="btn-to-article">→</a>
      </div>
    </article>
    <div class="more-projects-container">
        {#each otherProject  as project }
            <article class="project">
                <a href={`/work/${project.slug}`}>
                    <img src={project.pojectImageUrl} alt={project.name} />
                  </a>
                  <div class="project-info mt-s">
                    <div class="title-and-company">
                      <h3 class="semi-bold">
                        {project.name}
                      </h3>
                      <p class="company dark-grey">{project.company}</p>
                    </div>
                    <a href={`/work/${project.slug}`} class="btn-to-article">→</a>
                  </div>
            </article>
            
        {/each}
    </div>
  </div>
</section>
<style>
   img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    cursor: pointer;
  }

  .more-projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }

  .more-projects-container img {
    height: 350px;
  }

  .main-project img {
    max-height: 450px;
  }

  .project {
    width: 48%;
  }

  .project-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-to-article {
    display: block;
    font-size: 40px;
    border: 1px solid black;
    border-radius: 40px;
    padding: 0px 24px;
    transition: all 0.3s ease;
  }
  
  .btn-to-article:hover {
    background-color: black;
    color: white;
  }

  .company {
    font-size: 18px;
    margin-bottom: 0;
  }
  
  
  @media (max-width: 1024px) {
    .more-projects-container img {
      height: 300px;
    }
    
    .main-project img {
      max-height: 400px;
    }
  }
  
 
  @media (max-width: 768px) {
    .more-projects-container {
      flex-direction: column;
    }
    
    .project {
      width: 100%;
      margin-bottom: 20px;
    }
    
    .more-projects-container img {
      height: auto;
      max-height: 350px;
    }
    
    .btn-to-article {
      font-size: 32px;
      padding: 0px 18px;
    }
  }
  
  @media (max-width: 480px) {
    .company {
      font-size: 16px;
    }
  }
  </style>
