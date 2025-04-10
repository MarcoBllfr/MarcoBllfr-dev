<script lang="ts">
     import { Footer, Header } from "$components";
    import '../app.css'
    import '../theme.css'
    let {children} = $props();
</script>
<div class="site-wrapper">
    <Header />
    {@render children()}
    <Footer />
  </div>

  <style>
    .site-wrapper {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
      position: relative;
    }
  </style>