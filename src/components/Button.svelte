<script lang="ts">
    import {scale} from "svelte/transition";
    type ButtonStyle = 'primary' | 'secondary';
    export let flat: boolean=false;
    export let outlined: boolean = false;
    export let type: ButtonStyle = 'primary';
    export let rounded: boolean = true;
    export let isIcon: boolean = false;

</script>



<button on:click transition:scale class:icon={isIcon} style="border-radius: {rounded ? '8px' : '0px'}" class:flat={!flat} class:outlined={outlined} class={type}>
    <slot />
</button>

<style lang="postcss">
    button {
        padding: 8px 36px;
        color: theme("colors.white");
        font-size: 0.9rem;
        transition: all 0.5s ease-out;
        font-weight: 600;
        letter-spacing: 0.6px;
    }

    button:hover {
        scale: 1.03;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, .3);
    }
    .primary {
        background-color: theme("colors.blue");
    }
    .flat {
        box-shadow: 1px 2px 3px rgba(0, 0, 0, .3);
    }
    .icon {
        padding: 6px;
    }
</style>