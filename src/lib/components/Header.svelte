<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, DarkThemeButton } from "$components";
  import Icon from "@iconify/svelte";
  import logo from "$assets/logo.png";

  let isMenuOpen: boolean = $state(false);

  function goToContactForm() {
    goto("#contact-form");
    isMenuOpen = false;
    document.body.classList.remove("no-scroll");
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }

</script>

<nav class="navbar default-margin">
  <a href="/" class="logo">
    <img src={logo} alt="Logo" class="logo-img" />
  </a>

  <button class="hamburger-menu" aria-label="Menu" onclick={toggleMenu}>
    <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} width={28} />
  </button>

  {#if isMenuOpen}
  <button class="menu-overlay" onclick={toggleMenu} aria-label="Close menu"></button>

  {/if}

  <div class={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
    <a href="/#about-me" class="nav-link" onclick={() => {
      isMenuOpen = false;
      document.body.classList.remove("no-scroll");
    }}>About Me</a>
    <a href="/#my-work" class="nav-link" onclick={() => {
      isMenuOpen = false;
      document.body.classList.remove("no-scroll");
    }}>Work</a>
    <DarkThemeButton />
    <Button className="nav-bar" onclick={goToContactForm}>Contact</Button>
  </div>
</nav>

<style>
 
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1000;
  }

  .logo-img {
    width: 85px;
    height: auto;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: nowrap;
  }

  .nav-link {
    text-decoration: none;
    font-size: 16px;
    color: inherit;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .hamburger-menu {
    display: none;
    color: var(--text-color);
  }

  .menu-overlay {
    display: none;
  }

 

  @media (max-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--background-color, white);
      z-index: 30;
      padding: 15px 20px;
    }

    .hamburger-menu {
      display: block;
      z-index: 31;
      position: relative;
    }

  .menu-overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(var(--background-color-rgb, 255, 255, 255), 0.5);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  z-index: 10;
}

    .navbar-links {
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      transition: right 0.3s ease;
      padding: 20px;
      z-index: 20;
      gap: 30px;
      overflow-y: auto;
    }

    .navbar-links.mobile-open {
      right: 0;
    }

    .logo-img {
      width: 70px;
      position: relative;
      z-index: 31;
    }

    .nav-link {
      font-size: 24px;
      padding: 10px 0;
      font-weight: 500;
    }
  }
</style>
