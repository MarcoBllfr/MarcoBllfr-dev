<script lang="ts">
  import { Button, SectionHeadline, ExperienceTable } from "$components";
  import image from "$assets/about-me.webp";
  import { goto } from "$app/navigation";
  import { language } from '$lib/stores/storage';
  import sanityClient, { processAboutMe } from "$lib/utils/sanity";
  import Icon from '@iconify/svelte';
  function onclick() {
    goto("/#contact-form");
  }

  interface AboutMeProps {
    workExperience: SanityWorkExperience[];
    education: SanityEducation[];
    rawAboutMe: SanityAboutMe; 
  }

  let { workExperience, education, rawAboutMe }: AboutMeProps = $props();

  
  let aboutMe = $derived(processAboutMe(rawAboutMe, $language));

  function toggleLanguage() {
    language.set($language === 'it' ? 'en' : 'it');
  }
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <div class="image-wrapper">
      <img class="image" src={image} alt="Marco" />
    </div>
    
    <div class="text">
<div class="language-switch-container">
  <button 
    class="language-switch" 
    class:active={$language === 'it'}
    onclick={toggleLanguage}
  >
    <Icon icon="twemoji:flag-italy" width="24" />
    <span>IT</span>
  </button>
  <div class="switch-divider"></div>
  <button 
    class="language-switch" 
    class:active={$language === 'en'}
    onclick={toggleLanguage}
  >
    <Icon icon="twemoji:flag-united-kingdom" width="24" />
    <span>EN</span>
  </button>
</div>
      {@html aboutMe}  
      
      <Button className="mt-m" {onclick}>Contattami</Button>
    </div>
  </div>
  
  <ExperienceTable {workExperience} {education} />
</section>
  <style>

.language-switch-container {
  display: flex;
  align-items: center;
  gap: 0;
  background: var(--card-bg-color);
  border-radius: 12px;
  padding: 4px;
  width: fit-content;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.language-switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  color: var(--secondary-text-color);
}

.language-switch:hover {
  background: var(--hover-color);
}

.language-switch.active {
  background: var(--background-color);
  color: #ff3e00;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.switch-divider {
  width: 1px;
  height: 24px;
  background: var(--border-color);
}
    .content-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      align-items: flex-start;
    }
  
    .image-wrapper {
      flex: 1 1 300px;
      max-width: 400px;
      display: flex;
      justify-content: center;
    }
  
    .image {
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 20px;
      object-fit: cover;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
  
    .text {
      flex: 1 1 320px;
      max-width: 600px;
      text-align: left;
      font-size: 1rem;
    }
  
    .text p {
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  

  
    .text em {
      font-style: italic;
      color: #555;
    }
  
    .tech {
      font-weight: bold;
      background-color: #f3f3f3;
      padding: 0.15em 0.5em;
      border-radius: 6px;
      font-family: monospace;
      color: #ff3e00;
    }
  
    @media (max-width: 768px) {
       .language-switch-container {
    margin: 0 auto 1.5rem;
  }

  .language-switch {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}
      .content-container {
        flex-direction: row;
        gap: 2rem;
      }
  
      .image-wrapper {
        width: 80%;
        max-width: 250px;
      }
  
      .text {
        width: 100%;
        padding: 0 1rem;
        font-size: 0.95rem;
      }
  
      .text p {
        text-align: justify;
      }
    
  
    @media (max-width: 480px) {
      .language-switch span {
    display: none;
  }

  .language-switch {
    padding: 0.4rem;
  }
      .text {
        font-size: 0.9rem;
      }
  
      .tech {
        font-size: 0.85rem;
      }
  
      .image-wrapper {
        width: 50%;
        max-width: 200px;
        max-height: 250px;
        height: 50%;
      }
      .image {
        border-radius: 30%;
      }
    }
  </style>
  