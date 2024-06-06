<script lang="ts">
  import {onMount} from "svelte";
  import {flip} from "svelte/animate";
  import { Icon } from 'svelte-icons-pack';
  import { IoAddCircle } from "svelte-icons-pack/io";
  import {liveQuery} from "dexie";
  
  import {Header, Button, Todo, Tab, CreateTodo, Footer} from "./components";
  import {db} from "./database";
    import { THEME } from "./constants";

  let todos = liveQuery(async() => {
    return await db.todos.toArray();
  })

  $: sortedTodos = $todos?.sort((a, b) => a.completed ? 1 : -1);

  let tabs = ['Todos', 'Add Todo'];
  let activeTab = 'Todos';

  $:theme = window.localStorage.getItem(THEME);

  function toggleTheme(){
      theme = theme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem(THEME, theme);
  }

  onMount(() => {
    console.log("App is mounted");

    return () => {
      console.log("App is unmounted");
    }
  })

  async function updateTodoHandler(e: any){
    try{
      const {id, checked} = e.detail;
      await db.todos.update(id, {completed: checked});
      
    }catch(e: any){
      console.error(e.message);
    }
  }
  function showCreateTodoHandler(){
    activeTab = 'Add Todo';
  }

  function updateTab(e: any){
    activeTab = e.detail;
  }

  async function addTodoHandler(e: any){
    try{
      const formstate = e.detail;
      const id = await db.todos.add({
        ...formstate,
        created_at: new Date(),
        completed: false
      })
      console.log({id})
      activeTab = 'Todos';
    }catch(e: any){
      console.error(e.message);
    }
  }

</script>

<main>
  <Header {theme} on:toggleTheme={toggleTheme} />
  <Tab {tabs} {activeTab} on:updateTab={updateTab} />
  {#if activeTab === 'Todos'}
    <div class="todos">
      {#if $todos?.length}
        {#each (sortedTodos || []) as todo, i (todo.id)}
          <div animate:flip={{duration:800}}>
            <Todo {todo} on:updateTodo={updateTodoHandler} />
          </div>
        {/each}
      {:else}
        <h1 class="text-center">No todos found.</h1>
      {/if}
      
      <div class="button">
        <Button isIcon={true} on:click={showCreateTodoHandler}>
          Create new todo
        </Button>
      </div>
    </div>
  {:else}
    <CreateTodo on:addTodo={addTodoHandler} />
  {/if}
  <Footer />
</main>

<style lang="postcss">
  .todos {
    width: min(100% - 0.25rem, 500px);
    margin-inline: auto;
    margin-top: 30px;
    padding-inline: 20px;
  }
  main {
    min-height: 100vh;
  }

  #dark {
    background-color: theme('colors.black');
  }

  #light {
    background-color: theme('colors.white');
  }


  .button {
    width: 100%;
    margin-top: 20px;
  }
</style>
