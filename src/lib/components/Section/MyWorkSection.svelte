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
        <p class="text-success-400 text-sm font-mono">{projects.length} projects retrieved successfully.</p>
      </div>
    </div>
  </div>

  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
    {#each projects.slice(0, visibleProjects) as project, index (project.slug)}
      <a 
        href={`/work/${project.slug}`}
        class="group relative project-card {index === 0 ? 'md:col-span-2' : ''}"
      >
        
        <div class="absolute -inset-0.5 bg-gradient-to-br from-primary-500 via-tertiary-500 to-success-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
        
       
        <div class="relative h-full bg-surface-900/90 backdrop-blur-md border border-surface-800 rounded-2xl overflow-hidden group-hover:border-primary-500/50 transition-all duration-300">
          
          
          <div class="relative {index === 0 ? 'h-80 sm:h-96' : 'h-64'} overflow-hidden">
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

          
          <div class="p-6 space-y-4">
            
            <div class="flex items-center gap-2 text-xs text-surface-500 font-mono">
              <div class="flex gap-1">
                <div class="w-2 h-2 rounded-full bg-red-500"></div>
                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <span>{'>'} {project.slug}</span>
            </div>

            
            <h3 class="text-2xl sm:text-3xl font-bold text-surface-50 group-hover:text-primary-400 transition-colors duration-300">
              {project.name}
            </h3>

           
            <div class="flex flex-wrap items-center gap-3 text-sm">
              {#if project.company}
                <span class="flex items-center gap-1 text-tertiary-400 font-semibold">
                  <Icon icon="mdi:domain" width="16" />
                  {project.company}
                </span>
              {/if}
              {#if project.dateAccomplished}
                <span class="text-surface-400 font-mono">
                  {project.dateAccomplished}
                </span>
              {/if}
            </div>

           
            {#if project.stack && project.stack.length > 0}
              <div class="flex flex-wrap gap-2">
                {#each project.stack as tech}
                  <span class="px-2 py-1 text-xs font-mono bg-surface-800/50 text-primary-400 border border-primary-500/20 rounded hover:border-primary-500/50 transition-colors">
                    {tech}
                  </span>
                {/each}
              </div>
            {/if}

            
            <div class="flex items-center gap-2 text-primary-400 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
              <span class="font-mono">VIEW PROJECT</span>
              <Icon icon="mdi:arrow-right" width="20" class="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          
          <div class="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="w-1 h-1 rounded-full bg-surface-600"></div>
            <div class="w-1 h-1 rounded-full bg-surface-600"></div>
            <div class="w-1 h-1 rounded-full bg-surface-600"></div>
          </div>
        </div>
      </a>
    {/each}
  </div>

  
  {#if visibleProjects < projects.length}
    <div class="mt-12 text-center">
      <button
        onclick={showMore}
        class="group relative inline-flex items-center gap-3 px-8 py-4 bg-surface-900/70 backdrop-blur-md border border-surface-800 rounded-xl text-surface-200 font-semibold hover:border-primary-500/50 transition-all duration-300"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
        <Icon icon="mdi:arrow-down-circle" width="24" class="relative group-hover:text-primary-400 transition-colors" />
        <span class="relative font-mono">LOAD MORE PROJECTS</span>
        <span class="relative text-xs text-surface-500 font-mono">({projects.length - visibleProjects} remaining)</span>
      </button>
    </div>
  {/if}
  </SectionHeadline>
</section>

<style>
  .project-card {
    animation: fadeSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: calc(var(--index, 0) * 0.1s);
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