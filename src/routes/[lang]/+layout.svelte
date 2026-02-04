<script lang="ts">
  import { Footer, Header } from "$components";
  import "$css";
  let { children, data } = $props();
  let { title, description, image, url } = data.meta;
  import "$translation/index.js";
  import { t, locale, waitLocale } from "svelte-i18n";
  $locale = data.lang;
  $effect(() => {
    if ($locale !== data.lang) {
      $locale = data.lang;
    }
  });
</script>


<div class="site-wrapper">
  <Header lang={data.lang} />
  {#key data.lang}
    {@render children()}
  {/key}
  <Footer />
</div>

<style>
</style>
