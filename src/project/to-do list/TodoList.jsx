import { useState } from "react"
import './todo.css'

function TodoList() {
    const [inputText, setInputText] = useState("");
    const [addTodoList, setAddTodoList] = useState([]);
    const [editList, setEditList] = useState([])

    const handleAddTodoList = () => {
        if (inputText.trim() === '') return
        setAddTodoList(prev => [
            ...prev,
            {
                id: prev.length + 1,
                item: inputText.trim(),
                complete: false
            }
        ]);
        setInputText("")
    };


    const handleDeletItem = (id) => {
        setAddTodoList(addTodoList.filter((del) => del.id !== id))
    }

    const handleComplete = (id) => {
        setAddTodoList(
            addTodoList.map(add => add.id === id ? { ...add, complete: !add.complete } : add)
        )
    }

    const handleEditList = (id) => {
        const itemToEdit = addTodoList.find(list => list.id === id)
        if (itemToEdit) {
            setEditList([itemToEdit])
        }
    }
    const handleInputChange = (e) => {
        setEditList([{ ...editList[0], item: e.target.value }])
    }
    const handleSaveList = (id) => {
        setAddTodoList(
            addTodoList.map(add => add.id === id ? { ...add, item: editList[0].item } : add)
        )
        setEditList([])
    }
    console.log(editList);


    return (
        <div>
            <div className="to-do-container">
                <h2>To-Do List</h2>
                <div>
                    <input type="text" placeholder="Enter to-do" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <button onClick={() => handleAddTodoList()}>Add</button>
                </div>
                <div className="todo-container">
                    {addTodoList.map((list, index) => (
                        <ul key={index}>
                            <li className="todo-item">
                                <div className="left">
                                    <input
                                        type="checkbox"
                                        checked={list.complete}
                                        onChange={() => handleComplete(list.id)}
                                    />
                                    <span className={list.complete ? "completed" : ""}>{
                                        list.id === editList[0]?.id ? <input className="text" value={editList[0]?.item}
                                            onChange={(e) => handleInputChange(e)} /> : list.item}</span>
                                </div>
                                <div className="right">
                                    <button onClick={() => handleDeletItem(list.id)}>Delete</button>
                                    {list.id === editList[0]?.id ? <button onClick={() => handleSaveList(list.id)}>save</button> :
                                        <button onClick={() => handleEditList(list.id)}>Edit</button>}
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TodoList