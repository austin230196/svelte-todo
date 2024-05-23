import {writable} from "svelte/store"
import {type Todo} from "../types"


const todos = writable<Todo[]>([
    {
        id: 1,
        title: 'Clean the toilet',
        description: 'Clean the bathroom with utmost prejudice',
        completed: false,
        created_at: Date.now(),
        due_date: Date.now() + (1000 * 60 * 60)
    }
])



export default todos;