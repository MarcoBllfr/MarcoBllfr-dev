<script lang="ts">
  import type { Snippet } from "svelte";

    interface SectionHeadlineProps{
        children:Snippet;
        sectionName: string;
    }
    let {children, sectionName}:SectionHeadlineProps = $props();
</script>
<div class="default-margin" id={sectionName}>
    {@render children()}
    
</div>