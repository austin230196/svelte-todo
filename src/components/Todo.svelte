<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import { spring } from 'svelte/motion';

    import {type Todo} from "../types";

    const dispatch = createEventDispatcher();

    export let todo: Todo;

    const coords = spring(
        { x: 50, y: 50 },
        {
            stiffness: 0.1,
            damping: 0.25
        }
    );


    function changeTodoHandler(e: any, id: number){
        // coords.update(props => {
        //     console.log({props});
        //     return {x: 100, y: 100};
        // });
        dispatch("updateTodo", {id, checked: e.target.checked})
    }

</script>


<div class="w-full border-2 mb-2 border-gray-300 rounded-md flex items-center gap-4 p-2 cursor-pointer">
    <input type="checkbox" checked={todo.completed} on:change={e => changeTodoHandler(e, todo.id)} />
    <section class="">
        <h3 class:completed={todo.completed}>{todo.title}</h3>
        <p class:completed={todo.completed}>{todo.description}</p>
    </section>
</div>


<style lang="postcss">
    div {
        transition: all 0.5s ease-out;
    }

    div:hover {
        opacity: 0.6;
    }

    .completed {
        text-decoration: line-through;
    }
</style>