<script lang="ts">
  import { Menu, Portal } from "@skeletonlabs/skeleton-svelte";
  import { DarkThemeButton } from "$components";
  import Icon from "@iconify/svelte";
  import logo from "$assets/logo.png";
  import { goto } from "$app/navigation";
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 bg-surface-950/80 backdrop-blur-md border-b border-surface-800/50"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <a href="/" class="relative z-50">
        <img src={logo} alt="Logo" class="w-16 sm:w-20 h-auto" />
      </a>

      <div class="hidden md:flex items-center gap-6">
        <a href="/#about-me" class="nav-link nav-about flex items-center gap-2">
          <Icon icon="mdi:account" width="18" />
          About Me
        </a>

        <a href="/#my-work" class="nav-link nav-work flex items-center gap-2">
          <Icon icon="mdi:briefcase" width="18" />
          Work
        </a>

        <a
          href="/#contact-form"
          class="nav-link nav-contact flex items-center gap-2"
        >
          <Icon icon="mdi:email-outline" width="18" />
          Contact
        </a>

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
              class="
                mt-3
                rounded-xl
                backdrop-blur-2xl
                bg-surface-900/40
                border border-surface-800/50
                shadow-xl
                min-w-[220px]
              "
            >
              <Menu.Item
                value="about"
                onclick={() => goto("/#about-me")}
                class="menu-item menu-about"
              >
                <Icon icon="mdi:account" width="18" />
                <Menu.ItemText>About Me</Menu.ItemText>
              </Menu.Item>

              <Menu.Item
                value="work"
                onclick={() => goto("/#my-work")}
                class="menu-item menu-work"
              >
                <Icon icon="mdi:briefcase" width="18" />
                <Menu.ItemText>Work</Menu.ItemText>
              </Menu.Item>

              <Menu.Item
                value="contact"
                onclick={() => goto("#contact-form")}
                class="menu-item menu-contact"
              >
                <Icon icon="mdi:email-outline" width="18" />
                <Menu.ItemText>Contact</Menu.ItemText>
              </Menu.Item>
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
