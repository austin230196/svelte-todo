<script lang="ts">
    import {createEventDispatcher} from "svelte";
    
    import { Button } from "./";

    const dispatch = createEventDispatcher();

    const formstate = {
        title: '',
        description: '',
        category: '',
        due_date: ''
    } 
    let valid = false;

    function addTodoHandler(){
        if(Object.values(formstate).some(s => s.trim() === "")){
            valid = false;
        }else {
            valid = true;
        }
        console.log({valid});
        dispatch("addTodo", formstate);
    }
</script>


<div class="max-w-[calc(100%-0.25rem)] min-w-[350px] sm:max-w-[500px] py-10 px-5 mx-auto mt-20 rounded-md bg-white flex flex-col items-center">
    <h2 class="mb-5 uppercase font-extrabold text-xl">New Todo</h2>
    <div class="w-full flex flex-col gap-1 mb-4">
        <label for="title" class="font-bold">Title</label>
        <input class="border border-gray rounded-md outline-none p-2" id="title" type="text" placeholder="Enter title" bind:value={formstate.title} />
    </div>
    <div class="w-full flex flex-col gap-1 mb-4">
        <label for="description" class="font-bold">Description</label>
        <input class="border border-gray rounded-md outline-none p-2" id="description" type="text" placeholder="Enter description" bind:value={formstate.description} />
    </div>
    <div class="w-full flex flex-col gap-1 mb-4">
        <label for="category" class="font-bold">Category</label>
        <input class="border border-gray rounded-md outline-none p-2" id="category" type="text" placeholder="Enter category" bind:value={formstate.category} />
    </div>
    <div class="w-full flex flex-col gap-1 mb-4">
        <label for="due" class="font-bold">Due date</label>
        <input class="border border-gray rounded-md outline-none p-2" id="due" type="date" placeholder="Enter due date" bind:value={formstate.due_date} />
    </div>
    <div class="w-full flex flex-col gap-1 mt-4">
        <Button disabled={!valid} on:click={addTodoHandler}>Create</Button>
    </div>
</div>