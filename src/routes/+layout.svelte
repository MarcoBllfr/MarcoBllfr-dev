<script lang="ts">
     import { Footer, Header } from "$components";
    import '../app.css'
    let {children} = $props();
</script>
<svelte:head>
  <title>MarcoBf-Dev Home</title>
  <meta name="description" content="Il mio sito web personale e portfolio">
  <meta property="og:title" content="MarcoBf-Dev Home">
  <meta property="og:description" content="Il mio sito web personale e portfolio">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.marcobf.dev/">
  <meta property="og:locale" content="it_IT">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:image" content="https://www.marcobf.dev/og-home.webp">
   <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:image" content="https://www.marcobf.dev/og-home.webp">
  <meta property="twitter:title" content="MarcoBf-Dev Home">
  <meta property="twitter:description" content="Il mio sito web personale e portfolio">
  <meta property="og:site_name" content="MarcoBf-Dev">
</svelte:head>
<div class="site-wrapper">
    <Header />
    {@render children()}
    <Footer />
  </div>

  <style>
   
  </style>