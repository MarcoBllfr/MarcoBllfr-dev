<script lang="ts">
  import Icon from "@iconify/svelte";
  
  let { data } = $props();
  let { company, name, dateAccomplished, stack, pojectImageUrl, content, description } = data.project;
  let {title,image,metadescription,url} = data.meta;
  
  function getTagFromStyle(style: ProcessedTextContent["style"]): string {
    if (style === "normal") {
      return "p";
    } else {
      return style;
    }
  }
  
  let imageBlocks = content.filter(block => block.type === "image");
  let textBlocks = content.filter(block => block.type === "text");
  
  let currentImageIndex = $state(0);
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageBlocks.length;
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageBlocks.length) % imageBlocks.length;
  }
  
  function goToImage(index: number) {
    currentImageIndex = index;
  }
</script>
<svelte:head>
  <title>Marco {title}</title>
  <meta name="description" content={metadescription}>
  <meta property="og:title" content={title} />
  <meta property="og:description" content={metadescription} />
  <meta property="og:url" content={url}>
  <meta property="og:image" content={image} />
  <meta property="og:locale" content="it_IT">
  <meta property="og:locale:alternate" content="en_US">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content={image}>
  <meta name="twitter:title" content={title}>
  <meta name="twitter:description" content={metadescription}>
  <meta name="og:site_name" content={title}>
</svelte:head>

<main class="min-h-screen bg-surface-950 text-surface-50">
  <section class="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="absolute inset-0 bg-linear-to-b from-primary-500/10 via-transparent to-transparent pointer-events-none"></div>
    
    <div class="max-w-6xl mx-auto relative">
      <div class="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono mb-6">
        <Icon icon="mdi:file-code" width="14" />
        <span>// CURRENT_SESSION</span>
      </div>

      <div class="absolute top-0 right-0 text-right space-y-1">
        {#if company}
          <p class="text-xs font-mono text-surface-500">client_id: <span class="text-tertiary-400">{company}</span></p>
        {/if}
        <p class="text-xm font-mono text-surface-500">Data: <span class="text-surface-400">{dateAccomplished}</span></p>
      </div>

      <div class="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono mb-6">
        <Icon icon="mdi:package-variant" width="16" />
        <span>type: "WEB_APP"</span>
      </div>

      <div class="mb-8">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
          <span class="text-surface-50">{name.split(' ')[0]}</span>
          {#if name.split(' ').length > 1}
            <br>
            <span class="bg-linear-to-r from-success-400 to-tertiary-400 bg-clip-text text-transparent">
              [{name.split(' ').slice(1).join(' ')}]
            </span>
          {/if}
        </h1>
        <div class="h-1 w-32 bg-linear-to-r from-primary-500 to-success-500"></div>
      </div>

      <div class="relative max-w-2xl">
        <div class="pl-6 border-l-2 border-primary-500/30 space-y-2">
          <p class="text-surface-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 sm:px-6 lg:px-8 mb-16">
    <div class="max-w-6xl mx-auto">
      <div class="relative group">
        <div class="absolute -inset-1 bg-linear-to-r from-primary-500 via-tertiary-500 to-success-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
        <div class="relative overflow-hidden rounded-2xl border-2 border-primary-500/30">
          
          <img src={pojectImageUrl} alt="{name} project" class="w-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 sm:px-6 lg:px-8 pb-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      <aside class="lg:col-span-4 space-y-8">
        <div class="flex items-center gap-2 text-xs font-mono text-surface-500 mb-6">
          <Icon icon="mdi:code-braces" width="14" />
          <span>// SECTION_01</span>
        </div>

        <div class="bg-surface-900/70 backdrop-blur-md border border-surface-800 rounded-xl p-6 sticky top-24">
          <h3 class="text-sm font-bold text-surface-400 font-mono mb-4 flex items-center gap-2">
            <Icon icon="mdi:code-tags" width="16" />
            TECH_STACK
          </h3>
          <div class="space-y-2">
            {#each stack as tech}
              <div class="flex items-center gap-2 text-sm group/tech cursor-default">
                <Icon icon="mdi:checkbox-marked-circle" width="16" class="text-success-400" />
                <span class="text-surface-300 group-hover/tech:text-primary-400 transition-colors font-mono">{tech}</span>
              </div>
            {/each}
          </div>
        </div>
      </aside>

      <article class="lg:col-span-8 space-y-12">
        <div class="space-y-6">
          {#each textBlocks as block}
            {#if block.style === 'h2'}
              <h2 class="text-3xl font-bold text-surface-50 mb-4 mt-8">
                {#each block.blocks as textBlock}
                  {#if textBlock.type === "link"}
                    <a href={textBlock.href} target="_blank" class="text-primary-400 hover:text-primary-300 underline decoration-primary-500/30 hover:decoration-primary-500 transition-colors">
                      {textBlock.content}
                    </a>
                  {:else}
                    {textBlock.content}
                  {/if}
                {/each}
              </h2>
            {:else if block.style === 'h3'}
              <h3 class="text-2xl font-bold text-primary-400 mb-3 mt-6">
                {#each block.blocks as textBlock}
                  {#if textBlock.type === "link"}
                    <a href={textBlock.href} target="_blank" class="text-primary-300 hover:text-primary-200 underline decoration-primary-500/30 hover:decoration-primary-500 transition-colors">
                      {textBlock.content}
                    </a>
                  {:else}
                    {textBlock.content}
                  {/if}
                {/each}
              </h3>
            {:else if block.style === 'h4'}
              <h4 class="text-xl font-bold text-tertiary-400 mb-2 mt-4">
                {#each block.blocks as textBlock}
                  {#if textBlock.type === "link"}
                    <a href={textBlock.href} target="_blank" class="text-tertiary-300 hover:text-tertiary-200 underline decoration-tertiary-500/30 hover:decoration-tertiary-500 transition-colors">
                      {textBlock.content}
                    </a>
                  {:else}
                    {textBlock.content}
                  {/if}
                {/each}
              </h4>
            {:else if block.style === 'blockquote'}
              <blockquote class="border-l-4 border-primary-500 pl-4 italic text-surface-400 my-6">
                {#each block.blocks as textBlock}
                  {#if textBlock.type === "link"}
                    <a href={textBlock.href} target="_blank" class="text-primary-400 hover:text-primary-300 underline decoration-primary-500/30 hover:decoration-primary-500 transition-colors">
                      {textBlock.content}
                    </a>
                  {:else}
                    {textBlock.content}
                  {/if}
                {/each}
              </blockquote>
            {:else}
              <p class="text-surface-300 leading-relaxed mb-4">
                {#each block.blocks as textBlock}
                  {#if textBlock.type === "link"}
                    <a href={textBlock.href} target="_blank" class="text-primary-400 hover:text-primary-300 underline decoration-primary-500/30 hover:decoration-primary-500 transition-colors">
                      {textBlock.content}
                    </a>
                  {:else}
                    {textBlock.content}
                  {/if}
                {/each}
              </p>
            {/if}
          {/each}
        </div>

        {#if imageBlocks.length > 0}
          <div class="relative group/carousel mt-12">
            <div class="absolute -inset-0.5 bg-linear-to-br from-primary-500/20 to-success-500/20 rounded-xl blur opacity-0 group-hover/carousel:opacity-100 transition duration-300"></div>
            <div class="relative overflow-hidden rounded-xl border border-surface-800 group-hover/carousel:border-primary-500/50 transition-colors bg-surface-900/50">
              <div class="relative aspect-video">
                <img 
                  src={imageBlocks[currentImageIndex].url} 
                  alt="Project detail {currentImageIndex + 1}" 
                  class="w-full h-full object-cover"
                />
                
                {#if imageBlocks.length > 1}
                  <button
                    onclick={prevImage}
                    class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-900/80 backdrop-blur border border-surface-700 hover:border-primary-500/50 flex items-center justify-center text-surface-300 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                    aria-label="Immagine precedente"
                  >
                    <Icon icon="mdi:chevron-left" width="24" />
                  </button>
                  
                  <button
                    onclick={nextImage}
                    class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-900/80 backdrop-blur border border-surface-700 hover:border-primary-500/50 flex items-center justify-center text-surface-300 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                    aria-label="Immagine successiva"
                  >
                    <Icon icon="mdi:chevron-right" width="24" />
                  </button>
                  
                  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-surface-900/80 backdrop-blur border border-surface-700 rounded-full">
                    {#each imageBlocks as _, index}
                      <button
                        onclick={() => goToImage(index)}
                        class="w-2 h-2 rounded-full transition-all duration-300 {index === currentImageIndex ? 'bg-primary-400 w-6' : 'bg-surface-600 hover:bg-surface-400'}"
                        aria-label="Vai all'immagine {index + 1}"
                      ></button>
                    {/each}
                  </div>
                  
                  <div class="absolute top-4 right-4 px-3 py-1 bg-surface-900/80 backdrop-blur border border-surface-700 rounded-full text-surface-300 text-xs font-mono">
                    {currentImageIndex + 1} / {imageBlocks.length}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/if}
      </article>
    </div>
  </section>

  <section class="border-t border-surface-800 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto flex justify-center">
      <a 
        href="/"
        class="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500 via-tertiary-500 to-success-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div class="absolute inset-0 bg-surface-900/70 backdrop-blur-md border border-surface-800 rounded-xl group-hover:border-primary-500/50 transition-all duration-300"></div>
        
        <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div class="relative flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-400 transition-all duration-300">
            <Icon icon="mdi:home" width="18" class="text-primary-400 group-hover:text-surface-950 transition-colors" />
          </div>
          
          <div class="flex flex-col">
            <span class="text-xs font-mono text-surface-500 group-hover:text-primary-400 transition-colors">cd ~</span>
            <span class="font-semibold text-surface-200 group-hover:text-surface-50 transition-colors">Torna alla home</span>
          </div>
          
          <Icon icon="mdi:arrow-right" width="20" class="text-primary-400 group-hover:translate-x-1 transition-transform ml-2" />
        </div>
      </a>
    </div>
  </section>
</main>