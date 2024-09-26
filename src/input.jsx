import { useContext, useState } from "react"
import { TaskContext } from "./context"

const Input = () => {
    const [taskInput, setTaskInput] = useState("")
    const { task, setTask } = useContext(TaskContext)
    const handleSetTask = (e) => {
        setTaskInput(e.target.value)
    }
    const handleAddTask = (e) => {
        e.preventDefault()
        setTask([...task, { id: Math.random(), title: taskInput, isDone: false }])
        setTaskInput("")
    }
    return (
        <div>
            <div className="flex justify-center mb-3">
                <h2 className="text-cyan-600 hover:text-purple-700 mt-4 font-bold">todo project</h2>
            </div>
            <div>
                <form className="flex flex-row-reverse justify-center gap-2 mb-3" onSubmit={handleAddTask}>
                    <input type="submit" value="ثبت" className="bg-green-700 text-white py-1 px-4 rounded-md cursor-pointer" />
                    <input type="text" placeholder="کار خودرا بنویسید..." className="py-1 px-4 rounded-md border border-gray-500 w-full" value={taskInput} onChange={handleSetTask} />
                </form>
            </div>
        </div>
    )
}
export default Input