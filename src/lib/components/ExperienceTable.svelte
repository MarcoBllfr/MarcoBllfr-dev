<script lang="ts">
  import { Button } from "$components";
  let isEducationRender: boolean = $state(true);
  
  function switchOnMyWorks() {
    isEducationRender = !isEducationRender;
  }
  
  interface ExperienceTableProps {
    workExperience: SanityWorkExperience[];
    education: SanityEducation[];
  }
  
  let { workExperience, education }: ExperienceTableProps = $props();
</script>

{#snippet ButtonContent()}
<div class="headline-container">
  <h2 class="headline-text">
    {isEducationRender ? "My Education Experience" : "My Work Experience"}
  </h2>
  <Button className="headline-button" onclick={switchOnMyWorks}>
      <p>{isEducationRender ? "Vedi esperienze lavorative →" : "Vedi studi →"}</p>
  </Button>
</div>
{/snippet}

<section class="default-margin work-experience mt-m">
  {#if isEducationRender}
    <ul class="work-experience-list">
      {#each education as edu}
        <li class="work-item">
          <article>
            <h3 class="semi-bold mb-xs">{edu.titolo}</h3>
            <div class="company-and-date">
              <p>{edu.scuola}</p>
              <p class="dark-grey">
                {edu.startDate?.slice(0, 7)}
                {#if edu.endDate}
                  / {edu.endDate.slice(0, 7)}
                {:else}
                  / present
                {/if}
              </p>
            </div>
            {#if edu.descrizione}
              <p class="mt-xs description dark-grey">{edu.descrizione}</p>
            {/if}
          </article>
        </li>
      {/each}
    </ul>
   
      {@render ButtonContent()}
    
  {:else}
    <ul class="work-experience-list">
      {#each workExperience as job}
        <li class="work-item">
          <article>
            <h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
            <div class="company-and-date">
              <p>{job.company}</p>
              <p class="dark-grey date">
                {job.startDate?.slice(0, 7)}
                {#if job.endDate}
                  / {job.endDate.slice(0, 7)}
                {:else}
                  / present
                {/if}
              </p>
            </div>
          </article>
        </li>
      {/each}
    </ul>
    
      {@render ButtonContent()}
    
  {/if}
</section>

<style>
   .work-experience {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 5%;
  }

  .work-experience-list {
    width: 65%;
  }

  .headline-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  .work-item {
    border-bottom: 1px solid #f0eded;
    padding-bottom: 12px;
  }

  .work-item:not(:first-of-type) {
    padding-top: 16px;
  }

  .work-item p {
    margin-bottom: 0;
  }

  .company-and-date {
    display: flex;
    justify-content: space-between;
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 8px;
  }

  .dark-grey {
    color: #777;
  }

  @media (max-width: 1024px) {
    .headline-container {
      width: 35%;
    }
    
    .work-experience-list {
      width: 60%;
    }
  }

  @media (max-width: 768px) {
    .work-experience {
      flex-direction: column-reverse;
      gap: 30px;
    }

    .work-experience-list,
    .headline-container {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
  .company-and-date {
    flex-direction: column;
    gap: 4px;
  }
  
  .date {
    font-size: 14px;
  }
  
  .work-item {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>