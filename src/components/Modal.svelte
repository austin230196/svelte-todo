<script lang="ts">
    import {fade, blur, slide, fly, scale, draw} from "svelte/transition";
</script>


<div in:scale={{delay: 250, duration: 300}} out:slide={{axis: 'x'}} class="fixed top-0 left-0 right-0 bottom-0 bg-backdrop flex content-center items-start z-10000" on:click|self>
    <slot />
</div>