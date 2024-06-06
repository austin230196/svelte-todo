import Dexie, {type Table} from "dexie";


export type Todo = {
    id: number;
    title: string;
    description: string;
    category: string;
    created_at: Date;
    due_date: Date;
    completed: boolean;
}


export class TodoDatabase extends Dexie {
    public readonly todos!: Table<Todo>

    public constructor(dbName: string){
        super(dbName);
        this.version(1).stores({
            todos: '++id, title, description, category, due_date, created_at, completed'
        })
    }
}



export const db = new TodoDatabase("todos");