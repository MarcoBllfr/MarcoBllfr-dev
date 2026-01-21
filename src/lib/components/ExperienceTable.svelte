<script lang="ts">
  import Icon from "@iconify/svelte";

  let isEducationRender = $state(true);

  function switchTab(showEducation: boolean) {
    isEducationRender = showEducation;
  }

  interface ExperienceTableProps {
    workExperience: SanityWorkExperience[];
    education: SanityEducation[];
  }

  let { workExperience, education }: ExperienceTableProps = $props();
</script>

<section class="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
  <div class="text-center mb-12">
    <div
      class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success-500/10 text-success-400 border border-success-500/20 text-xs font-mono mb-4"
    >
      <Icon icon="mdi:database" width="14" />
      <span>LIVE_FEED</span>
    </div>
    <h2
      class="text-4xl sm:text-5xl font-bold text-primary-400 font-mono tracking-wider"
    >
      DATA_LOG
    </h2>
  </div>

  
  <div class="flex justify-center mb-16">
    <div
      class="inline-flex items-center gap-2 bg-surface-900/70 backdrop-blur-md rounded-xl p-1.5 border border-surface-800 shadow-lg"
    >
      <button
        onclick={() => switchTab(false)}
        class="flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm uppercase tracking-wide
               {!isEducationRender
          ? 'bg-primary-500 text-surface-950 shadow-md shadow-primary-500/30'
          : 'text-surface-300 hover:bg-surface-800/50'}"
      >
        <Icon icon="mdi:briefcase" width="18" />
        <span>Lavori</span>
      </button>

      <button
        onclick={() => switchTab(true)}
        class="flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm uppercase tracking-wide
               {isEducationRender
          ? 'bg-success-500 text-surface-950 shadow-md shadow-success-500/30'
          : 'text-surface-300 hover:bg-surface-800/50'}"
      >
        <Icon icon="mdi:school" width="18" />
        <span>Educazione</span>
      </button>
    </div>
  </div>

  <div class="relative">
    <div
      class="absolute left-0 sm:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-500 via-tertiary-500 to-success-500 transform -translate-x-1/2"
    ></div>

    {#if !isEducationRender}
      {#if workExperience.length < 1}{/if}

      <div class="space-y-16 fade-slide-in">
        {#each workExperience as job, index}
          <div
            class="relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-start"
          >
           
            <div
              class="absolute left-0 sm:left-1/2 top-8 w-4 h-4 rounded-full bg-primary-500 border-4 border-surface-950 transform -translate-x-1/2 z-10 shadow-lg shadow-primary-500/50"
            >
              <div
                class="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75"
              ></div>
            </div>

            
            <div
              class="
    ml-8 sm:ml-0
    {index % 2 === 0
                ? 'sm:col-start-1 sm:pr-12 sm:text-right'
                : 'sm:col-start-2 sm:pl-12'}
"
            >
              
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono mb-3"
              >
                <span
                  >{job.startDate?.slice(0, 4)} - {job.endDate
                    ? job.endDate.slice(0, 4)
                    : "PRESENT"}</span
                >
                <span class="text-success-400"
                  >[STATUS: {job.endDate ? "ARCHIVED" : "ACTIVE"}]</span
                >
              </div>

              
              <div class="relative group">
                <div
                  class="absolute -inset-0.5 bg-linear-to-r from-primary-500 to-tertiary-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-300"
                ></div>
                <div
                  class="relative bg-surface-900/70 backdrop-blur-md border border-surface-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
                >
                 
                  <div
                    class="flex items-center gap-2 text-xs text-surface-500 mb-2 font-mono"
                  >
                    <div class="flex gap-1">
                      <div class="w-2 h-2 rounded-full bg-red-500"></div>
                      <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span
                      >[{job.endDate
                        ? "STATIC, ARCHIVED"
                        : "STATIC, IMMUTABLE"}]</span
                    >
                  </div>

                  <h3
                    class="text-xl sm:text-2xl font-bold text-surface-50 mb-2"
                  >
                    {job.jobTitle}
                  </h3>
                  <p
                    class="text-primary-400 font-semibold mb-4 flex items-center gap-2 {index %
                      2 ===
                    0
                      ? 'sm:justify-end'
                      : ''}"
                  >
                    <Icon icon="mdi:office-building" width="16" />
                    {job.company}
                  </p>

                  {#if job.descrizione}
                    <p class="text-surface-300 text-sm leading-relaxed mb-4">
                      {job.descrizione}
                    </p>
                  {/if}

                  {#if job.technologies}
                    <div
                      class="flex flex-wrap gap-2 {index % 2 === 0
                        ? 'sm:justify-end'
                        : ''}"
                    >
                      {#each job.technologies as tech}
                        <span
                          class="px-2 py-1 text-xs font-mono bg-surface-800 text-primary-400 border border-primary-500/30 rounded"
                        >
                          {tech}
                        </span>
                      {/each}
                    </div>
                  {/if}

                  
                  <div class="absolute top-4 right-4 flex gap-1">
                    <div class="w-1 h-1 rounded-full bg-surface-600"></div>
                    <div class="w-1 h-1 rounded-full bg-surface-600"></div>
                    <div class="w-1 h-1 rounded-full bg-surface-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="space-y-16 fade-slide-in">
        {#each education as edu, index}
          <div
            class="relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-start"
          >
            <div
              class="absolute left-0 sm:left-1/2 top-8 w-4 h-4 rounded-full bg-success-500 border-4 border-surface-950 transform -translate-x-1/2 z-10 shadow-lg shadow-success-500/50"
            >
              <div
                class="absolute inset-0 rounded-full bg-success-500 animate-ping opacity-75"
              ></div>
            </div>

            <div
              class="
    ml-8 sm:ml-0
    {index % 2 === 0
                ? 'sm:col-start-1 sm:pr-12 sm:text-right'
                : 'sm:col-start-2 sm:pl-12'}
  "
            >
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-success-500/10 border border-success-500/30 text-success-400 text-xs font-mono mb-3"
              >
                <span
                  >{edu.startDate?.slice(0, 4)} - {edu.endDate
                    ? edu.endDate.slice(0, 4)
                    : "PRESENT"}</span
                >
                <span class="text-tertiary-400"
                  >[STATUS: {edu.endDate ? "COMPLETED" : "ONGOING"}]</span
                >
              </div>

              <div class="relative group">
                <div
                  class="absolute -inset-0.5 bg-linear-to-r from-success-500 to-tertiary-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-300"
                ></div>
                <div
                  class="relative bg-surface-900/70 backdrop-blur-md border border-surface-800 rounded-xl p-6 hover:border-success-500/50 transition-all duration-300"
                >
                  <div
                    class="flex items-center gap-2 text-xs text-surface-500 mb-2 font-mono"
                  >
                    <div class="flex gap-1">
                      <div class="w-2 h-2 rounded-full bg-red-500"></div>
                      <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span
                      >[{edu.endDate
                        ? "STATIC, ARCHIVED"
                        : "STATIC, IMMUTABLE"}]</span
                    >
                  </div>

                  <h3
                    class="text-xl sm:text-2xl font-bold text-surface-50 mb-2"
                  >
                    {edu.titolo}
                  </h3>
                  <p
                    class="text-success-400 font-semibold mb-4 flex items-center gap-2 {index %
                      2 ===
                    0
                      ? 'sm:justify-end'
                      : ''}"
                  >
                    <Icon icon="mdi:school" width="16" />
                    {edu.scuola}
                  </p>

                  {#if edu.descrizione}
                    <p class="text-surface-300 text-sm leading-relaxed">
                      {edu.descrizione}
                    </p>
                  {/if}

                  <div class="absolute top-4 right-4 flex gap-1">
                    <div class="w-1 h-1 rounded-full bg-surface-600"></div>
                    <div class="w-1 h-1 rounded-full bg-surface-600"></div>
                    <div class="w-1 h-1 rounded-full bg-surface-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .fade-slide-in {
    animation: fadeSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  
  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-ping {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
</style>
