<script lang="ts">
  import {onMount} from "svelte";
  import {flip} from "svelte/animate";
  import { Icon } from 'svelte-icons-pack';
  import { IoAddCircle } from "svelte-icons-pack/io";
  
  import {Header, Button, Todo, Modal, CreateTodo} from "./components";
  import todos from "./stores/todos";

  let showModal: boolean = false;

  onMount(() => {
    console.log("App is mounted");

    return () => {
      console.log("App is unmounted");
    }
  })


  function showModalHandler(){
    showModal = true;
  }

  function hideModalHandler(){
    showModal = false;
  }

  function addTodoHandler(e: any){
    let formstate = e.detail;
    todos.update(oldTodos => {
      let newTodo: Todo = {
        ...formstate,
        created_at: Date.now(),
        completed: false,
        id: oldTodos.length + 1,
      }
      return [...oldTodos, newTodo];
    })
    showModal = false;
  }


  function updateTodoHandler(e: any){
    const detail = e.detail;
    todos.update(oldTodos => {
      let copy = [...oldTodos];
      let found = copy.find(t => t.id === detail.id);
      found!.completed = detail.checked;
      copy.sort((a, _) => a.completed ? 1 : -1);
      return [...copy];
    })
  }


</script>

<main>
  {#if showModal}
    <Modal on:click={hideModalHandler}>
      <CreateTodo on:addTodo={addTodoHandler} />
    </Modal>
  {/if}
  <Header />
  <div class="max-w-[calc(100%-0.25rem)] sm:max-w-[500px] border border-t-0 border-blue p-5 mx-auto">
    {#each $todos as todo, i (todo.id)}
      <div animate:flip={{duration:800}}>
        <Todo {todo} on:updateTodo={updateTodoHandler} />
      </div>
    {:else}
      <h1 class="text-center">No todos found.</h1>
    {/each}
    <div class="mt-6 text-center">
      <Button isIcon={true} on:click={showModalHandler}>
        <span>
          <Icon src={IoAddCircle} size="2rem" />
        </span>
      </Button>
    </div>
  </div>
</main>

<style>
</style>
