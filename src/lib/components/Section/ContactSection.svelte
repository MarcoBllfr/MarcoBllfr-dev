<script lang="ts">
  import { SectionHeadline } from "$components";
  import Icon from "@iconify/svelte";
</script>

<section class="mt-l">
  <SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
  <div class="contact-container default-margin mt-m">
    <div class="contact-text">
      <h3 class="bold mb-s">Contattami</h3>
      <p>
        Sono sempre pronto a nuove sfide e aperto ad ogni idea. Puoi contattarmi attraverso i seguenti canali:
      </p>
    </div>
    
    <div class="social-links">
      <a href="mailto:marco@example.com" class="social-link" aria-label="Email">
        <Icon icon="mdi:email-outline" width={50} />
        <span class="link-text">Email</span>
      </a>
      
      <a href="https://linkedin.com/in/marco-example" target="_blank" class="social-link" aria-label="LinkedIn">
        <Icon icon="mdi:linkedin" width={50} />
        <span class="link-text">LinkedIn</span>
      </a>
      
      <a href="https://github.com/marco-example" target="_blank" class="social-link" aria-label="GitHub">
        <Icon icon="mdi:github" width={50} />
        <span class="link-text">GitHub</span>
      </a>
    </div>
  </div>
</section>

<style>
  section {
    padding-bottom: 140px;
  }

  .contact-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .contact-text {
    width: 45%;
  }

  .social-links {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .social-link {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    padding: 10px;
    border-radius: 8px;
  }

  .social-link:hover {
    transform: translateY(-5px);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .social-link :global(svg) {
    margin-right: 15px;
  }

  .link-text {
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
    }

    .contact-text {
      width: 100%;
      margin-bottom: 30px;
    }
    
    .social-links {
      width: 100%;
      flex-direction: row;
      justify-content: center;
      gap: 40px;
    }
    
    .social-link {
      padding: 15px;
    }
    
    .social-link :global(svg) {
      width: 55px !important;
      height: 55px !important;
      margin-right: 0;
    }
    
    .link-text {
      display: none;
    }
    
    .social-link:hover {
      transform: scale(1.1);
    }
  }
</style>