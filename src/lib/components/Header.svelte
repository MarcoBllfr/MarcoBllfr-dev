<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, DarkThemeButton } from "$components";
 
  import logo from "$assets/logo.png";

  function goToContactForm() {
    goto("#contact-form");
  }
</script>

<nav class="navbar default-margin">
  <a href="/" class="logo">
    <img src={logo} alt="Logo" class="logo-img"/>
  </a>
  <div class="navbar-links">
    <a href="/#about-me" class="nav-link">About Me</a>
    <a href="/#my-work" class="nav-link">Work</a>
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

  @media (max-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-between;
    }

    .navbar-links {
      gap: 20px;
    }

    .logo-img {
      width: 80px;
    }
  }
</style>