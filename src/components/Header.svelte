<script lang="ts">
    import svelteLogo from "../assets/svelte.svg"; 
</script>


<header class="bg-blue">
    <img src={svelteLogo} alt="Svelte Logo" />
</header>


<style type="postcss">
    header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    img {
        width: 100px;
    }
</style>