import { useState } from 'react';
import './App.css';
import Input from './input';
import Tasks from './tasks';
import { TaskContext } from './context';
function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "کار شماره 1",
      isDone: false
    },
    {
      id: 2,
      title: "کار شماره 2",
      isDone: false
    },
    {
      id: 3,
      title: "کار شماره 3",
      isDone: false
    }
  ])
  return (
    <div className="todo mt-8 bg-white w-[40%] my-0 mx-auto px-4 rounded-lg">
      <TaskContext.Provider value={{
        task,
        setTask
      }}>
        <Input />
        <Tasks />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
