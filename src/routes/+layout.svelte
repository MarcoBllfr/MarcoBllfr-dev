<script lang="ts">
     import { Footer, Header } from "$components";
    import '../app.css'
    let {children} = $props();
</script>

<div class="site-wrapper">
    <Header />
    {@render children()}
    <Footer />
  </div>

  <style>
   
  </style>