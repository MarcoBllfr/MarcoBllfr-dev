<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";
   
  function onclick(){
    goto("/#contact-form");
  }

</script>
<section class="hero-section default-margin">
  <h3>Ehi! Sono Marco</h3>
  <div class="underscore mb-m"></div>
  <h1>Mi diverto a creare siti web,</h1>
  <h1 class="dark-grey mb-m">veloci e facili da usare.</h1>
  </section>
  <style>
    .hero-section{
      padding-top: 60px;
    }
  </style>