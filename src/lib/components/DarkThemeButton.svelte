<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let isDarkMode: boolean = $state(true);

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      isDarkMode = savedTheme === "dark";
    } else {
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    applyTheme(isDarkMode);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          isDarkMode = e.matches;
          applyTheme(isDarkMode);
        }
      });
  });

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }

  function applyTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }
</script>

<button
  class="theme-toggle"
  onclick={toggleTheme}
  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
>
  {#if isDarkMode}
    <Icon icon="mdi:weather-sunny" width={24} />
  {:else}
    <Icon icon="mdi:weather-night" width={24} />
  {/if}
</button>

<style>
  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    color: var(--text-color);
    transition:
      background-color 0.3s,
      transform 0.3s;
    padding: 0;
  }

  .theme-toggle:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: rotate(15deg);
  }

  :global(.dark-mode) .theme-toggle:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
