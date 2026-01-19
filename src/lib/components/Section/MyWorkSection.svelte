<script lang="ts">
  import { SectionHeadline } from "$components";
  import Icon from "@iconify/svelte";

  interface MyworksProps {
    projects: ProcessedProject[];
  }

  let { projects }: MyworksProps = $props();

  let visibleProjects = $state(4);

  function showMore() {
    visibleProjects += 2;
  }

  
</script>

<section class="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <SectionHeadline sectionName="my-work">
    <!-- HEADER -->
    <div class="mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono mb-4">
        <Icon icon="mdi:database-sync" width="14" />
        <span>SYSTEM.MY_PROJECTS_LOG</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-surface-50 mb-2">
            MIEI
          </h2>
          <h2 class="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary-400 via-tertiary-400 to-success-400 bg-clip-text text-transparent">
            PROGETTI
          </h2>
          <div class="h-1 w-40 bg-gradient-to-r from-primary-500 to-success-500 mt-2"></div>
        </div>

        <div class="text-right">
          <p class="text-surface-400 text-sm font-mono">Scanning database...</p>
          <p class="text-success-400 text-sm font-mono">
            {projects.length} projects retrieved successfully.
          </p>
        </div>
      </div>
    </div>

   
    <div class="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {#each projects.slice(0, visibleProjects) as project, index (project.slug)}
        <a
          href={`/work/${project.slug}`}
          class="group relative project-card col-span-1
            {index === 0 ? 'col-span-2' : ''}"
          style={`--index:${index}`}
        >
          
          <div class="absolute -inset-0.5 bg-gradient-to-br from-primary-500 via-tertiary-500 to-success-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

          
          <div class="relative h-full bg-surface-900/90 backdrop-blur-md border border-surface-800 rounded-2xl overflow-hidden group-hover:border-primary-500/50 transition-all duration-300">
            
            <div
              class="relative overflow-hidden
              {index === 0 ? 'h-64 sm:h-80 lg:h-96' : 'h-40 sm:h-56'}"
            >
              <img
                src={project.pojectImageUrl}
                alt={project.name}
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div class="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/40 to-transparent"></div>

              <div class="absolute top-4 right-4 px-2 py-1 bg-surface-900/80 backdrop-blur-sm border border-primary-500/30 rounded text-primary-400 text-xs font-mono">
                v{index + 1}.0
              </div>

              {#if index === 0}
                <div class="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-success-500/20 backdrop-blur-sm border border-success-500/30 rounded-full text-success-400 text-xs font-mono">
                  <div class="w-2 h-2 rounded-full bg-success-400 animate-pulse"></div>
                  <span>LIVE</span>
                </div>
              {/if}
            </div>

            
            <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div class="hidden sm:flex items-center gap-2 text-xs text-surface-500 font-mono">
                <div class="flex gap-1">
                  <div class="w-2 h-2 rounded-full bg-red-500"></div>
                  <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span>{'>'} {project.slug}</span>
              </div>

              <h3 class="text-lg sm:text-2xl font-bold text-surface-50 group-hover:text-primary-400 transition-colors">
                {project.name}
              </h3>

             
              {#if project.stack?.length}
  <div class="relative -mx-4 sm:mx-0 overflow-hidden rounded">
    <div class="tech-marquee-wrapper">
      <div class="tech-marquee flex gap-4">
        {#each project.stack as tech}
          <span
            class="shrink-0 px-2.5 py-1 text-[11px] sm:text-xs font-mono
                   bg-surface-800/60 text-primary-400
                   border border-primary-500/20 rounded-full
                   hover:border-primary-500/50 transition-colors"
          >
            {tech}
          </span>
        {/each}
      </div>
    </div>
  </div>
{/if}






              <div class="flex items-center gap-2 text-primary-400 font-semibold text-sm">
                <span class="font-mono">VIEW</span>
                <Icon icon="mdi:arrow-right" width="18" />
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    
    {#if visibleProjects < projects.length}
      <div class="mt-12 text-center">
        <button
          onclick={showMore}
          class="group relative inline-flex items-center gap-3 px-8 py-4 bg-surface-900/70 backdrop-blur-md border border-surface-800 rounded-xl text-surface-200 font-semibold hover:border-primary-500/50 transition-all"
        >
          <Icon icon="mdi:arrow-down-circle" width="24" />
          <span class="font-mono">LOAD MORE PROJECTS</span>
        </button>
      </div>
    {/if}
  </SectionHeadline>
</section>

<style>
  .project-card {
    animation: fadeSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: calc(var(--index) * 0.1s);
  }
/* Wrapper overflow */
.tech-marquee-wrapper {
  overflow: hidden;
  width: 100%;
}

/* Contenitore dei chip */
.tech-marquee {
  display: inline-flex;
  white-space: nowrap;
  gap: 1rem;
  will-change: transform;
}

/* Animazione solo su mobile */
@media (max-width: 767px) {
  .tech-marquee {
    animation: marquee 15s linear infinite;
  }
}

/* Hover pausa */
.tech-marquee-wrapper:hover .tech-marquee {
  animation-play-state: paused;
}

/* Pac-Man style: esce a sinistra, entra a destra */
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}


  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
