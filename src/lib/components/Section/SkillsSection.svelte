<script lang="ts">
  import Icon from "@iconify/svelte";
import { t } from "svelte-i18n";
  interface SkillSectionProps {
    skills: Skill[];
  }

  let { skills }: SkillSectionProps = $props();
</script>

<section class="w-full flex flex-col items-center">
  <div
    class="absolute inset-0 bg-linear-to-b from-transparent via-tertiary-500/5 to-transparent pointer-events-none"
  ></div>

  <div class="max-w-7xl mx-auto relative">
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-500/10 border border-tertiary-500/30 text-tertiary-400 text-xs font-mono mb-6"
      >
        <Icon icon="mdi:code-braces" width="14" />
        <span>SYSTEM.TECH_ARSENAL</span>
      </div>

      <h2 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
        <span
          class="bg-linear-to-r from-tertiary-400 via-primary-400 to-success-400 bg-clip-text text-transparent"
        >
          Skills
        </span>
      </h2>
      <div
        class="h-1 w-32 bg-linear-to-r from-tertiary-500 to-success-500 mx-auto mb-6"
      ></div>

      <p class="text-surface-400 max-w-2xl mx-auto font-mono text-sm">
        {">"} {$t('skill.description')}
      </p>
    </div>

    <div class="w-full px-4 sm:px-8">
      <div
        class="mx-auto grid
           grid-cols-2
           sm:grid-cols-3
           md:grid-cols-5
           lg:grid-cols-5
           gap-4 sm:gap-6
           max-w-6xl
           place-items-center"
      >
        {#each skills as skill, index}
          <div
            class="group relative skill-card w-32 sm:w-32 lg:w-36"
            style="animation-delay: {index * 0.05}s"
            role="button"
            tabindex="0"
          >
            <div
              class="absolute -inset-1 bg-linear-to-br from-tertiary-500/30 via-primary-500/30 to-success-500/30 rounded-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 blur-xl transition duration-500"
            ></div>

            <div
              class="relative aspect-square rounded-2xl p-4 sm:p-6
                    flex flex-col items-center justify-center
                    backdrop-blur-sm
                    transition-all duration-300
                    group-hover:backdrop-blur-md group-hover:bg-surface-900/5
           group-active:backdrop-blur-md group-active:bg-surface-900/10"
            >
              <div
                class="relative group-hover:scale-110 group-active:scale-110
           transition-transform duration duration-300"
              >
                <div
                  class="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 group-active:opacity-50 transition-opacity duration-300"
                >
                  <i class="{skill.iconClass} text-5xl sm:text-6xl lg:text-7xl"
                  ></i>
                </div>
                <i
                  class="{skill.iconClass} text-5xl sm:text-6xl lg:text-7xl relative z-10"
                ></i>
              </div>

              {#if skill.name}
                <span
                  class="mt-2 text-xs font-mono text-surface-300 text-center
        opacity-100 sm:opacity-0
        sm:group-hover:opacity-100 transition-opacity duration-300"
                >
                  {skill.name}
                </span>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .skill-card {
    animation: fadeSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>
