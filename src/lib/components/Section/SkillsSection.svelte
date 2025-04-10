<script lang="ts">
  import SectionHeadline from "./SectionHeadline.svelte";

    interface SkillSectioProps{
        skills: Skill[];
    }
    let {skills}:SkillSectioProps = $props();
</script>
<section class="mt-l">
    <SectionHeadline sectionName="Skills">Skills</SectionHeadline>
    <div class="wrapper default-margin">
        <div class="skills-container mt-m">
            {#each skills as skill }
                <i class={skill.iconClass}></i>
            {/each}
        </div>
    </div>
</section>
<style>
   .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills-container {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  i {
    font-size: 80px;
    color: black;
    transition: transform 0.3s ease;
  }
  
  i:hover {
    transform: scale(1.1);
  }
  
 
  @media (max-width: 1024px) {
    .skills-container {
      width: 90%;
    }
    
    i {
      font-size: 70px;
    }
  }
  
  @media (max-width: 768px) {
    .skills-container {
      width: 100%;
      gap: 20px;
    }
    
    i {
      font-size: 60px;
    }
  }
  
  @media (max-width: 480px) {
    .skills-container {
      gap: 15px;
    }
    
    i {
      font-size: 50px;
    }
  }
  </style>