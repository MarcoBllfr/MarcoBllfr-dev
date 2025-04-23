<script lang="ts">
  import Icon from "@iconify/svelte";

  let {data} = $props();
  let {company, name, dateAccomplished, stack, pojectImageUrl, content} = data.project;
  
  function getTagFromStyle(style : ProcessedTextContent["style"]): string {
      if (style === "normal"){
          return "p"
      } else {
          return style;
      }
  }

  let imageBlocks = content.filter(block => block.type === "image");
  let textBlocks = content.filter(block => block.type === "text");
  
  let imagePairs = [];
  for (let i = 0; i < imageBlocks.length; i += 2) {
    if (i + 1 < imageBlocks.length) {
      imagePairs.push([imageBlocks[i], imageBlocks[i + 1]]);
    } else {
      imagePairs.push([imageBlocks[i]]);
    }
  }
</script>

<main class="default-margin work-page">
  <h4>{company}</h4>
  <div class="underscore"></div>
  <h2 class="mb-s">{name}</h2>
  <img class="project-image" src={pojectImageUrl} alt="{name} project" />
  
  <div class="project-container mt-m">
    <div class="meta-data">
      <h3 class="semi-bold">Date</h3>
      <p>{dateAccomplished.slice(0,7)}</p>
      <h3 class="semi-bold mt-m">Tech Stack</h3>
      <ul>
        {#each stack as skill }
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
    
    <div class="project-text">
      {#each textBlocks as block}
        <svelte:element this={getTagFromStyle(block.style)}>
          {#each block.blocks as textBlock}
            {#if textBlock.type === "link"}
              <a href={textBlock.href} target="_blank" class="link">{textBlock.content}</a>
            {:else}
              {textBlock.content}
            {/if}
          {/each}
        </svelte:element>
      {/each}
      
      
      
      {#each imagePairs as pair}
        <div class="image-row">
          {#each pair as image}
            <div class="image-container">
              <img class="content-image" src={image.url} alt="Project detail" />
            </div>
          {/each}
        </div>
      {/each}
      <div class="back-button-container">
        <a href="/" class="back-button" aria-label="Back to home">
          <Icon icon="line-md:arrow-left" width={28} />
          <span>Torna alla home</span>
        </a>
      </div>
    </div>
  </div>
</main>

<style>
  .work-page {
    padding-top: 80px;
    padding-bottom: 140px;
  }

  .project-image {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 8px;
  }

  .project-container {
    display: flex;
    flex-wrap: wrap; 
    gap: 2rem; 
  }

  .meta-data {
    min-width: 200px;
    flex: 1 0 200px; 
  }
  
  .project-text {
    flex: 3 0 300px; 
  }
  
  .image-row {
    display: flex;
    gap: 16px;
    margin: 24px 0;
    width: 100%;
  }
  
  .image-container {
    flex: 1;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .content-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
    display: block;
  }
  
  .image-container:hover .content-image {
    transform: scale(1.02);
  }
  
  .back-button-container {
    margin: 24px 0;
  }
  
  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid var(--accent-color);
    border-radius: 30px;
    transition: all 0.3s ease;
  }
  
  .back-button:hover {
    background-color: var(--accent-color);
    color: var(--button-text-color);
    transform: translateX(-5px);
  }
  
  @media (max-width: 768px) {
    .project-container {
      flex-direction: column;
    }
    
    .image-row {
      gap: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .image-row {
      gap: 8px;
    }
  }
</style>