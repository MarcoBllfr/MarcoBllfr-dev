<script lang="ts">
  import { Menu, Portal } from "@skeletonlabs/skeleton-svelte";
  import { DarkThemeButton } from "$components";
  import Icon from "@iconify/svelte";
  import logo from "$assets/logo.svg";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  let { lang } = $props();

  const navLinks = [
    { id: "about-me", label: "About Me", icon: "mdi:account" },
    { id: "my-work", label: "Work", icon: "mdi:briefcase" },
    { id: "contact-form", label: "Contact", icon: "mdi:email-outline" },
  ];

 function handleScroll(e: Event, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      if (browser) {
        sessionStorage.setItem('scrollTarget', id);
        goto(`/${lang}`); 
      }
    }
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 bg-surface-950/80 backdrop-blur-md border-b border-surface-800/50"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <a href="/{lang}" class="relative z-50">
        <img src={logo} alt="Logo" class="w-16 sm:w-20 h-auto" />
      </a>

      <div class="hidden md:flex items-center gap-6">
        {#each navLinks as link}
          <a
            href="/{lang}"
            onclick={(e) => handleScroll(e, link.id)}
            class="nav-link flex items-center gap-2"
          >
            <Icon icon={link.icon} width="18" />
            {link.label}
          </a>
        {/each}
        <DarkThemeButton />
      </div>

      <Menu>
        <Menu.Trigger
          class="md:hidden z-50 p-2 text-surface-200 hover:text-primary-400 transition-colors"
          aria-label="Open menu"
        >
          <Icon icon="mdi:menu" width="26" />
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content
              class="mt-3 rounded-xl backdrop-blur-2xl bg-surface-900/40 border border-surface-800/50 shadow-xl min-w-[220px]"
            >
              {#each navLinks as link}
                <Menu.Item
                  value={link.id}
                  onclick={(e) => handleScroll(e, link.id)}
                  class="menu-item"
                >
                  <Icon icon={link.icon} width="18" />
                  <Menu.ItemText>{link.label}</Menu.ItemText>
                </Menu.Item>
              {/each}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu>
    </div>
  </div>
</nav>

<div class="h-10"></div>

<style>
  .nav-link {
    font-family: monospace;
    color: var(--color-surface-contrast-light);
    padding: 0.4rem 0.75rem;
    border-radius: 0.5rem;
    transition:
      color 0.25s ease,
      background 0.25s ease,
      box-shadow 0.25s ease;
  }

  .nav-link:hover {
    color: var(--color-primary-400);
    background: color-mix(in oklch, var(--color-surface-900) 35%, transparent);
    backdrop-filter: blur(8px);
    box-shadow: 0 6px 20px -10px
      color-mix(in oklch, var(--color-primary-500) 40%, transparent);
  }

  :global(.menu-item) {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 0.75rem 1rem;
    font-size: 0.95rem;

    color: var(--color-surface-contrast-light);
    border-radius: 0.5rem;

    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  :global(.menu-item:hover) {
    background: color-mix(in oklch, var(--color-surface-800) 40%, transparent);
    color: var(--color-primary-400);
  }
</style>
