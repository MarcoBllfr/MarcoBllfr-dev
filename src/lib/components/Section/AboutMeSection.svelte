<script lang="ts">
	import { get } from 'svelte/store';
  import { Button, SectionHeadline, ExperienceTable } from "$components";
  import image from "$assets/about-me.webp";
  import { goto } from "$app/navigation";
  import { language } from "$lib/stores/storage";
  import { processAboutMe } from "$lib/utils/sanity";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  function onclick(route: string) {
    if (route == "contattami") {
      goto("/#contact-form");
    } else {
      goto("/#my-work");
    }
  }

  interface AboutMeProps {
    workExperience: SanityWorkExperience[];
    education: SanityEducation[];
    rawAboutMe: SanityAboutMe;
  }

  let { workExperience, education, rawAboutMe }: AboutMeProps = $props();
let aboutMe = $derived(rawAboutMe.italianContent);
  //let aboutMe = $derived(processAboutMe(rawAboutMe, $language));

  function toggleLanguage() {
    language.set($language === "it" ? "en" : "it");
     if ($language === "it"){
      aboutMe=rawAboutMe.italianContent
    }else{
      aboutMe=rawAboutMe.englishContent
    }
  }

  //effetto scrittura
  const roles = ["Web Developer", "Svelte Dev", "React Dev"];
  let currentRoleIndex = $state(0);
  let displayedText = $state("");
  let isDeleting = $state(false);

  onMount(() => {
    if ($language === "it"){
      aboutMe=rawAboutMe.italianContent
    }else{
      aboutMe=rawAboutMe.englishContent
    }
    function type() {
      const currentRole = roles[currentRoleIndex];

      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          displayedText = currentRole.slice(0, displayedText.length + 1);
          setTimeout(type, 150); // Velocità
        } else {
          setTimeout(() => {
            isDeleting = true;
            type();
          }, 3000); // Pausa
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          displayedText = displayedText.slice(0, -1);
          setTimeout(type, 50);
        } else {
          // next role
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          setTimeout(type, 800);
        }
      }
    }

    type();
  });
</script>
<SectionHeadline sectionName="about-me">
<section
  class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    <div class="space-y-6 lg:space-y-8 order-2 lg:order-1">
      <div class="flex flex-wrap items-center gap-3">
        <button
          onclick={toggleLanguage}
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                 bg-success-500/10 text-success-400 border border-success-500/20
                 hover:bg-success-500/20 transition-all duration-300
                 text-sm font-bold uppercase"
        >
          <Icon
            icon={$language === "it"
              ? "twemoji:flag-italy"
              : "twemoji:flag-united-kingdom"}
            width="16"
          />
          <span>{$language}</span>
        </button>

        <button
          onclick={toggleLanguage}
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                 text-surface-400 hover:text-surface-200 hover:bg-surface-800/50
                 transition-all duration-200 text-sm"
        >
          <Icon icon="mdi:swap-horizontal" width="16" />
          <span class="hidden sm:inline"
            >Switch to {$language === "it" ? "EN" : "IT"}</span
          >
          <span class="sm:hidden">{$language === "it" ? "EN" : "IT"}</span>
        </button>
      </div>

      <div>
        <span
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                     bg-primary-500/10 text-primary-400 border border-primary-500/20
                     text-sm font-bold"
        >
          <Icon
            icon="mdi:checkbox-blank-circle"
            width="12"
            class="animate-pulse"
          />
          <span>ABOUT ME</span>
        </span>
      </div>

      <div class="space-y-2">
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
        >
          Marco Bellafiore
        </h1>
        <h1
          class="text-2xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold leading-tight text-primary-500 min-h-[1.2em]"
        >
          {displayedText}<span class="animate-blink">|</span>
        </h1>
      </div>

      <div
        class="prose-custom max-w-xl text-surface-300 leading-relaxed space-y-4"
      >
        {@html aboutMe}
      </div>

      <div class="pt-6 flex flex-wrap gap-5 sm:gap-6 items-center">
        <button
          onclick={() => onclick("mieiLavori")}
          class="
      group relative isolate
      inline-flex items-center gap-3

      px-7 py-3.5 sm:px-8 sm:py-4
      rounded-full

      font-mono text-sm sm:text-base font-semibold
      text-white

      bg-linear-to-r from-tertiary-500 to-purple-500

      shadow-[5px_5px_0_var(--color-success-500)]
      transition-all duration-300 ease-out
      will-change-transform

      hover:-translate-y-1
      hover:shadow-[8px_8px_0_var(--color-success-500)]

      active:translate-y-0.5
      active:shadow-[3px_3px_0_var(--color-success-500)]

      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-success-500
      focus-visible:ring-offset-2
      focus-visible:ring-offset-surface-950
    "
        >
          <span class="whitespace-nowrap">&lt;I_miei_progetti /&gt;</span>

          <span
            class="
        transition-transform duration-300 ease-out
        group-hover:translate-x-1
      "
          >
            →
          </span>
        </button>

        <button
          onclick={() => onclick("contattami")}
          class="
      inline-flex items-center

      px-7 py-3.5 sm:px-8 sm:py-4
      rounded-full

      font-mono text-sm sm:text-base font-semibold
      text-white

      border border-white/80
      bg-white/0
      backdrop-blur-sm

      transition-all duration-300 ease-out
      will-change-transform

      hover:bg-white/10
      hover:-translate-y-0.5
      hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]

      active:translate-y-0
      active:bg-white/5

      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-white/80
      focus-visible:ring-offset-2
      focus-visible:ring-offset-surface-950
    "
        >
          Contact_Me_
        </button>
      </div>
    </div>

    <div
      class="flex justify-center items-center order-1 lg:order-2 py-8 lg:py-0"
    >
      <div class="relative">
        <div
          class="absolute inset-0 -m-16 sm:-m-20 lg:-m-24
                 rounded-full bg-linear-to-br from-primary-500/20 via-tertiary-500/20 to-secondary-500/20
                 blur-3xl opacity-75 pointer-events-none"
        ></div>

        <div class="relative">
          <div
            class="p-1 rounded-full bg-linear-to-br from-primary-500 via-tertiary-500 to-secondary-500 shadow-2xl"
          >
            <img
              src={image}
              alt="Marco"
              class="w-56 h-56 sm:w-72 sm:h-75 lg:w-80 lg:h-80 xl:w-96 xl:h-96
                     rounded-full object-cover object-center border-4 border-surface-900"
            />
          </div>

          <div
            class="absolute -top-2 -right-2 sm:top-2 sm:right-2 lg:top-4 lg:right-4
                      px-3 py-2 rounded-xl
                      bg-surface-900/70 backdrop-blur-md border border-surface-800
                      shadow-lg"
          >
            <div class="flex items-center gap-2">
              <Icon icon="mdi:code-tags" width="20" class="text-primary-400" />
              <span class="text-xs sm:text-sm font-semibold text-surface-200"
                >JS/TS</span
              >
            </div>
          </div>

          <div
            class="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-2 lg:bottom-4 lg:left-4
                      px-3 py-2 rounded-xl
                      bg-surface-900/70 backdrop-blur-md border border-surface-800
                      shadow-lg"
          >
            <div class="flex items-center gap-2">
              <Icon icon="logos:react" width="20" />

              <span
                class="text-xs sm:text-sm font-semibold text-surface-200 xs:hidden"
                >React & Svelte</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-16 lg:mt-24">
    <ExperienceTable {workExperience} {education} />
  </div>
</section>
</SectionHeadline>

<style>
  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }

  :global(.animate-blink) {
    animation: blink 1s infinite;
  }
  :global(.prose-custom p) {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: var(--color-surface-200);
  }

  :global(.prose-custom strong) {
    color: var(--color-surface-200);
    font-weight: 600;
  }

  :global(.prose-custom .tech) {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.625rem;
    border-radius: 0.5rem;
    background: linear-gradient(
      135deg,
      var(--color-primary-500),
      var(--color-tertiary-500)
    );
    background-clip: padding-box;
    background-size: 200% 200%;
    border: 1px solid;
    border-color: color-mix(in srgb, var(--color-primary-500) 30%, transparent);
    color: var(--color-tertiary-900);
    font-family:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }

  :global(.prose-custom .tech:hover) {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border-color: color-mix(in srgb, var(--color-primary-500) 50%, transparent);
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  :global(.animate-pulse) {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
