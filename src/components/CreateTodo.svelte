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
    const errors = {
        title: '',
        description: '',
        category: '',
        due_date: ''
    } 

    $: {
        if(formstate.title.trim() === "" || formstate.title.trim()?.length < 6){
            errors.title = "Title must be valid and greater than 5";
        }else errors.title = ""
        if(formstate.description.trim() === "" || formstate.description.trim()?.length < 6){
            errors.description = "Description must be valid and greater than 5";
        }else errors.description = ""
        if(formstate.category.trim() === "" || formstate.category.trim()?.length < 6){
            errors.category = "Category must be valid and greater than 5";
        }else errors.category = ""
        if(formstate.due_date.trim() === "" || formstate.due_date.trim()?.length < 6){
            errors.due_date = "Due date is required";
        }else errors.due_date = ""
    }
    $: inValid = Object.values(errors).some(s => s.trim() !== "");

    function addTodoHandler(){
        if(inValid) return;
        console.log({inValid});
        dispatch("addTodo", formstate);
    }
</script>


<div class="max-w-[calc(100%-0.25rem)] min-w-[350px] sm:max-w-[500px] py-10 px-5 mx-auto mt-20 rounded-md bg-white flex flex-col items-center">
    <h2 class="mb-5 uppercase font-extrabold text-xl">New Todo</h2>
    <div class="w-full flex flex-col gap-1 mb-4">
        <label for="title" class="font-bold">Title</label>
        <input class="border border-gray rounded-md outline-none p-2" id="title" type="text" placeholder="Enter title" bind:value={formstate.title} />
        {#if errors.title}
            <i class="text-error text-sm">{errors.title}</i>
        {/if}
    </div>
    <div class="w-full flex flex-col gap-1 mb-4">
        <label for="description" class="font-bold">Description</label>
        <input class="border border-gray rounded-md outline-none p-2" id="description" type="text" placeholder="Enter description" bind:value={formstate.description} />
        {#if errors.description}
            <i class="text-error text-sm">{errors.description}</i>
        {/if}
    </div>
    <div class="w-full flex flex-col gap-1 mb-4">
        <label for="category" class="font-bold">Category</label>
        <input class="border border-gray rounded-md outline-none p-2" id="category" type="text" placeholder="Enter category" bind:value={formstate.category} />
        {#if errors.category}
            <i class="text-error text-sm">{errors.category}</i>
        {/if}
    </div>
    <div class="w-full flex flex-col gap-1 mb-4">
        <label for="due" class="font-bold">Due date</label>
        <input class="border border-gray rounded-md outline-none p-2" id="due" type="date" placeholder="Enter due date" bind:value={formstate.due_date} />
        {#if errors.due_date}
            <i class="text-error text-sm">{errors.due_date}</i>
        {/if}
    </div>
    <div class="w-full flex flex-col gap-1 mt-4">
        <Button disabled={inValid} on:click={addTodoHandler}>Create</Button>
    </div>
</div>