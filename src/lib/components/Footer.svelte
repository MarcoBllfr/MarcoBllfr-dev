<script lang="ts">
  import Icon from "@iconify/svelte";

</script>

<footer class="relative mt-20 overflow-hidden">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      <div
        class="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
      >
        <div class="inline-flex items-center gap-2 mb-2">
          <div
            class="w-8 h-8 rounded-lg bg-linear-to-br from-primary-500 to-tertiary-500 flex items-center justify-center"
          >
            <Icon icon="mdi:code-braces" width="18" class="text-surface-950" />
          </div>
          <h3
            class="text-2xl font-bold bg-linear-to-r from-primary-400 to-tertiary-400 bg-clip-text text-transparent"
          >
            Marco
          </h3>
        </div>
        <p class="text-sm text-surface-400 font-mono max-w-xs mx-auto md:mx-0">
          {">"} Se stai leggendo questo, grazie per l'attenzione non esitare a contattarmi
          {"<3"}
        </p>
      </div>

      <div class="text-center space-y-4"></div>

      <div class="text-center md:text-right space-y-4">
        <h4
          class="text-sm font-bold text-surface-400 font-mono uppercase tracking-wider mb-4"
        >
          Connect
        </h4>
        <div class="flex justify-center md:justify-end gap-4">
          <a
            href="https://github.com/MarcoBllfr"
            class="group relative"
            aria-label="GitHub"
          >
            <div
              class="absolute -inset-2 bg-linear-to-br from-primary-500/30 to-tertiary-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"
            ></div>
            <div
              class="relative w-12 h-12 rounded-xl bg-surface-900/50 backdrop-blur-sm border border-surface-800 group-hover:border-primary-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            >
              <Icon
                icon="mdi:github"
                width="24"
                class="text-surface-400 group-hover:text-primary-400 transition-colors"
              />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/marcobllfr/"
            class="group relative"
            aria-label="LinkedIn"
          >
            <div
              class="absolute -inset-2 bg-linear-to-br from-tertiary-500/30 to-success-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"
            ></div>
            <div
              class="relative w-12 h-12 rounded-xl bg-surface-900/50 backdrop-blur-sm border border-surface-800 group-hover:border-tertiary-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            >
              <Icon
                icon="mdi:linkedin"
                width="24"
                class="text-surface-400 group-hover:text-tertiary-400 transition-colors"
              />
            </div>
          </a>

          <a
            href="mailto:marcobella2@proton.me"
            class="group relative"
            aria-label="Email"
          >
            <div
              class="absolute -inset-2 bg-linear-to-br from-success-500/30 to-primary-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"
            ></div>
            <div
              class="relative w-12 h-12 rounded-xl bg-surface-900/50 backdrop-blur-sm border border-surface-800 group-hover:border-success-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            >
              <Icon
                icon="mdi:email-outline"
                width="24"
                class="text-surface-400 group-hover:text-success-400 transition-colors"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center md:justify-end gap-2 text-surface-500 font-mono text-xs"
    >
      <span>Built with</span>
      <Icon
        icon="mdi:heart"
        width="14"
        class="text-primary-400 animate-pulse"
      />
      <span>& SvelteKit</span>
    </div>
  </div>
</footer>

<style>
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
</style>
