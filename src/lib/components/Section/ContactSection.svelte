<script lang="ts">
  import { SectionHeadline } from "$components";
  import Icon from "@iconify/svelte";
</script>

<section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
   <SectionHeadline sectionName="contact-form">
  <div
    class="absolute inset-0 bg-linear-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none"
  ></div>

  <div class="max-w-6xl mx-auto relative">
    <div class="text-center mb-16">
      <h2 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
        <span
          class="bg-linear-to-r from-primary-400 via-tertiary-400 to-success-400 bg-clip-text text-transparent"
        >
          Contatti
        </span>
      </h2>
      <div
        class="h-1 w-32 bg-linear-to-r from-primary-500 to-success-500 mx-auto mb-6"
      ></div>

      <p class="text-surface-400 max-w-2xl mx-auto font-mono text-sm">
        {">"} Scegli il tuo canale preferito.
      </p>
    </div>

    <div class="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
      <a
        href="mailto:marcobella2@proton.me"
        class="group relative contact-card"
      >
        <div
          class="absolute -inset-0.5 bg-linear-to-br from-primary-500 to-tertiary-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"
        ></div>

        <div
          class="relative h-full bg-surface-900/90 backdrop-blur-md border border-surface-800 rounded-2xl p-4 sm:p-6 lg:p-8 group-hover:border-primary-500/50 transition-all duration-300 flex flex-col items-center text-center"
        >
          <div
            class="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-primary-500 group-hover:border-primary-400 group-hover:scale-110 transition-all duration-300"
          >
            <Icon
              icon="mdi:email-outline"
              class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary-400 group-hover:text-surface-950 transition-colors"
            />
          </div>

          <div class="space-y-1 sm:space-y-2 mb-2 sm:mb-4">
            <h3
              class="text-sm sm:text-lg lg:text-xl font-bold text-surface-50 group-hover:text-primary-400 transition-colors"
            >
              Email
            </h3>
            <p class="hidden sm:block text-xs font-mono text-surface-500">
              contattami tramite Email
            </p>
          </div>

          <div
            class="hidden sm:flex items-center gap-2 text-xs font-mono text-success-400 mb-6"
          >
            <div
              class="w-2 h-2 rounded-full bg-success-400 animate-pulse"
            ></div>
            <span>ACTIVE</span>
          </div>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/marcobllfr/"
        class="group relative contact-card"
      >
        <div
          class="absolute -inset-0.5 bg-linear-to-br from-tertiary-500 to-success-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"
        ></div>

        <div
          class="relative h-full bg-surface-900/90 backdrop-blur-md border border-surface-800 rounded-2xl p-4 sm:p-6 lg:p-8
 group-hover:border-tertiary-500/50 transition-all duration-300 flex flex-col items-center text-center"
        >
          <div
            class="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-primary-500 group-hover:border-primary-400 group-hover:scale-110 transition-all duration-300"
          >
            <Icon
              icon="mdi:linkedin"
              class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-tertiary-400 group-hover:text-surface-950 transition-colors"
            />
          </div>

          <div class="space-y-1 sm:space-y-2 mb-2 sm:mb-4">
            <h3
              class="text-sm sm:text-lg lg:text-xl font-bold text-surface-50 group-hover:text-tertiary-400 transition-colors"
            >
              LinkedIn
            </h3>
            <p class="hidden sm:block text-xs font-mono text-surface-500">
              contatto Linkedin
            </p>
          </div>

          <div
            class="hidden sm:flex items-center gap-2 text-xs font-mono text-success-400 mb-6"
          >
            <div
              class="w-2 h-2 rounded-full bg-success-400 animate-pulse"
            ></div>
            <span>ACTIVE</span>
          </div>
        </div>
      </a>

      <a
        href="https://github.com/MarcoBllfr"
        class="group relative contact-card"
      >
        <div
          class="absolute -inset-0.5 bg-linear-to-br from-success-500 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"
        ></div>

        <div
          class="relative h-full bg-surface-900/90 backdrop-blur-md border border-surface-800 rounded-2xl p-4 sm:p-6 lg:p-8
 group-hover:border-success-500/50 transition-all duration-300 flex flex-col items-center text-center"
        >
          <div
            class="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-primary-500 group-hover:border-primary-400 group-hover:scale-110 transition-all duration-300"
          >
            <Icon
              icon="mdi:github"
              class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-success-400 group-hover:text-surface-950 transition-colors"
            />
          </div>

          <div class="space-y-1 sm:space-y-2 mb-2 sm:mb-4">
            <h3
              class="text-sm sm:text-lg lg:text-xl font-bold text-surface-50 group-hover:text-success-400 transition-colors"
            >
              GitHub
            </h3>
            <p class="hidden sm:block text-xs font-mono text-surface-500">
              vedi il codice
            </p>
          </div>

          <div
            class="hidden sm:flex items-center gap-2 text-xs font-mono text-success-400 mb-6"
          >
            <div
              class="w-2 h-2 rounded-full bg-success-400 animate-pulse"
            ></div>
            <span>ACTIVE</span>
          </div>
        </div>
      </a>
    </div>

    <div class="mt-16 text-center">
      <div
        class="inline-flex items-center gap-2 text-xs font-mono text-surface-500"
      >
        <span class="text-surface-700">|</span>
        <span>Response time: &lt;24h</span>
      </div>
    </div>
  </div>
  </SectionHeadline>
</section>

<style>
  .contact-card {
    animation: fadeSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
