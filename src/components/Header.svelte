<script lang="ts">
    import { AiOutlineMoon, AiOutlineSun } from "svelte-icons-pack/ai";
    import { Icon } from "svelte-icons-pack";
    import {createEventDispatcher} from "svelte";

    import svelteLogo from "../assets/svelte.svg"; 
    import { THEME } from "../constants";

    export let theme;

    const dispatch = createEventDispatcher();

    $:theme = window.localStorage.getItem(THEME);
    function updateTheme(){
        dispatch('toggleTheme');
    }
</script>


<header class="flex items-center justify-between">
    <img src={svelteLogo} alt="Svelte Logo" />
    <span on:click={updateTheme}>
        {#if theme === 'light'}
            <Icon src={AiOutlineMoon} />
        {:else}
            <Icon src={AiOutlineSun} />
        {/if}
    </span>
</header>


<style type="postcss">
    header {
        width: 100%;
        padding: 20px 40px;
        background-color: theme('colors.gray-light');
    }

    img {
        width: 30px;
    }

    span {
        font-size: 2rem;
        cursor: pointer;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;

        &:hover {
            background-color: rgba(0,0,0,.2);
        }
    }
</style>