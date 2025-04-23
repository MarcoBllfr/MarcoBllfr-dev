<script lang="ts">
  import { SectionHeadline } from "$components";
  import Icon from "@iconify/svelte";

  interface MyworksProps {
    projects: ProcessedProject[];
  }

  let { projects }: MyworksProps = $props();
  const mainProjectIndex = projects.findIndex(project => project.name === "Book Nest");
  const mainProject = projects[mainProjectIndex];
  
  const otherProjects = projects.filter((_, index) => index !== mainProjectIndex);

  let visibleOtherProject = $state(2);
  function showMore() {
    visibleOtherProject += 2;
  }
</script>

<section class="mt-l">
  <SectionHeadline sectionName="my-work">My Work</SectionHeadline>
  <div class="default-margin projects-container mt-m">
    
    <article class="main-project fade-in">
      <a href={`/work/${mainProject.slug}`} class="project-link">
        <div class="image-container main-image-container">
          <img src={mainProject.pojectImageUrl} alt={mainProject.name} class="project-img main-project-img" />
        </div>
        <div class="project-info mt-s">
          <div class="title-and-company">
            <h3 class="semi-bold project-title">{mainProject.name}</h3>
            {#if mainProject.company}
              <p class="company dark-grey">{mainProject.company}</p>
            {/if}
          </div>
          <span class="btn-to-article">
            <Icon icon="line-md:arrow-right" width={28} />
          </span>
        </div>
      </a>
    </article>

    <div class="projects-grid">
      {#each otherProjects.slice(0, visibleOtherProject) as project (project.slug)}
        <article class="project fade-in">
          <a href={`/work/${project.slug}`} class="project-link">
            <div class="image-container">
              <img src={project.pojectImageUrl} alt={project.name} class="project-img" />
            </div>
            <div class="project-info mt-s">
              <div class="title-and-company">
                <h3 class="semi-bold project-title">{project.name}</h3>
                {#if project.company}
                  <p class="company dark-grey">{project.company}</p>
                {/if}
              </div>
              <span class="btn-to-article">
                <Icon icon="line-md:arrow-right" width={28} />
              </span>
            </div>
          </a>
        </article>
      {/each}
    </div>

    {#if visibleOtherProject < otherProjects.length}
      <div class="show-more-container fade-in">
        <button class="show-more-btn" onclick={showMore}>Visualizza altri</button>
      </div>
    {/if}
  </div>
</section>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeInUp 0.5s ease forwards;
  }

  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .project-link {
    display: block;
    transition: transform 0.3s ease;
  }

  .project-link:hover {
    transform: translateY(-5px);
  }

  .image-container {
    width: 100%;
    height: 0;
    padding-bottom: 66.67%;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
  }

  .main-image-container {
    padding-bottom: 50%;
  }

  .project-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform 0.5s ease;
  }

  .project-link:hover .project-img {
    transform: scale(1.03);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .project-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title-and-company {
    flex: 1;
  }

  .project-title {
    margin-bottom: 5px;
  }

  .btn-to-article {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    min-width: 50px;
    height: 50px;
    border: 1px solid var(--accent-color);
    border-radius: 50%;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .project-link:hover .btn-to-article {
    background-color: var(--accent-color);
    color: var(--button-text-color);
  }

  .company {
    font-size: 16px;
    margin-bottom: 0;
  }

  .show-more-container {
    text-align: center;
    margin-top: 30px;
  }

  .show-more-btn {
    background-color: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .show-more-btn:hover {
    background-color: var(--accent-color);
    color: var(--button-text-color);
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .projects-container {
      gap: 40px;
    }

    .main-image-container {
      padding-bottom: 60%;
    }
  }

  @media (max-width: 480px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .company {
      font-size: 14px;
    }

    .btn-to-article {
      font-size: 28px;
      min-width: 40px;
      height: 40px;
    }
  }
</style>
