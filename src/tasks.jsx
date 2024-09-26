import { useContext } from "react"
import { TaskContext } from "./context"
const Task = () => {
    const { task, setTask } = useContext(TaskContext)
    const handleDonetask = (id) => {
        const index = task.findIndex(item => item.id === id)
        let newTaskItem = [...task]
        newTaskItem[index].isDone = !newTaskItem[index].isDone
        setTask(newTaskItem)
    }
    const handleDeletetask = (id) => {
        let newTask = task.filter(item => item.id !== id)
        setTask(newTask)
    }
    if (task.length) {
        return (
            <div>
                <ul className="flex flex-col rounded-lg bg-white border-y border-cyan-400  items-center p-2">
                    {
                        task.map(item => (
                            <li className={`flex justify-between w-full border-b hover:bg-cyan-200 p-3 rounded-lg ${item.isDone ? "bg-green-300 hover:bg-green-700" : ""}`} key={item.id}>
                                {item.title}
                                <span className="flex items-center gap-2">
                                    <i className={` ${item.isDone ? "fas fa-close text-yellow-600" : "fas fa-check text-green-500"}`} onClick={() => handleDonetask(item.id)}></i>
                                    <i className="fas fa-trash text-red-700 cursor-pointer" onClick={() => handleDeletetask(item.id)}></i>
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div >
        )
    } else {
        return <h4 className="text-center text-red-900 font-bold">هیچ کاری ثبت نشده...</h4>
    }

}
export default Task