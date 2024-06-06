<script lang="ts">
    import {createEventDispatcher} from "svelte";
    export let tabs: string[];
    export let activeTab: string;

    const dispatch = createEventDispatcher();

    function updateTab(tab: string){
        dispatch('updateTab', tab);
    }
</script>


<div>
    {#each tabs as tab, i (i)}
        <span on:click={() => updateTab(tab)} class={activeTab === tab ? 'active' : ''}>{tab}</span>
    {/each}
</div>


<style lang="postcss">
    div {
        width: min(100% - 0.25rem, 500px);
        margin-inline: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    span {
        width: 100%;
        text-align: center;
        padding: 20px;
        cursor: pointer;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.8rem;

        &.active {
            border-bottom: 2px solid theme('colors.blue');
            color: theme('colors.blue');
        }
    }
</style>