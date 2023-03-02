import { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import './index.css';

const STORE_KEY = 'TO_DO_APP';
function App() {
    const [todoList, setTodoList] = useState(() => {
        let list = localStorage.getItem(STORE_KEY);
        if (list) {
            return JSON.parse(list);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(STORE_KEY, JSON.stringify(todoList));
    }, [todoList]);

    const handleAdd = (job) => {
        const task = {
            id: Date.now(),
            name: job,
            isCompleted: false,
        };

        setTodoList([...todoList, task]);
    };

    const handleCompleted = (id) => {
        let task = todoList.find((item) => item.id === id);
        if (task) {
            task.isCompleted = true;
            setTodoList([...todoList]);
        }
    };
    const handleDelete = (id) => {
        let newList = todoList.filter((item) => item.id !== id);

        setTodoList([...newList]);

        // console.log(id);
    };
    return (
        <div className="App">
            <ToDoList todo={todoList} onAdd={handleAdd} onCompleted={handleCompleted} onDelete={handleDelete} />
        </div>
    );
}

export default App;
