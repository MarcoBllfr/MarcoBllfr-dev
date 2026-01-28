<script lang="ts">
     import { Footer, Header } from "$components";
    import '../app.css'
    let {children, data} = $props();
     let {title,description,image,url} = data.meta;
</script>
<svelte:head>
  <title>MarcoBf-Dev Home</title>
  <meta name="description" content={description}>
  <meta property="og:title" content={title}>
  <meta property="og:description" content={title}>
  <meta property="og:type" content="website">
  <meta property="og:url" content={url}>
  <meta property="og:locale" content="it_IT">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:image" content={image}>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content={image}>
  <meta name="twitter:title" content={title}>
  <meta name="twitter:description" content={title}>
  <meta name="og:site_name" content="MarcoBf-Dev">
</svelte:head>
<div class="site-wrapper">
    <Header />
    {@render children()}
    <Footer />
  </div>

  <style>
   
  </style>