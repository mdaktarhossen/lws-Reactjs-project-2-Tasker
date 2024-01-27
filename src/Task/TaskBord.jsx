import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TastAction from "./TastAction";
import TastLists from "./TastLists";

export default function TaskBord() {
  const defauldTask = {
    id: crypto.randomUUID(),
    title: "Akter",
    description: "My name is Akter",
    tags: [],
    priority: "High",
    isFav: false,
  };
  const [tasks, setTask] = useState([defauldTask]);
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTask([...tasks, newTask]);
    } else {
      setTask(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setAddTaskModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setAddTaskModal(true);
  };

  const handleCancel = () => {
    setAddTaskModal(false);
    setTaskToUpdate(null);
  };

  const handleDeleteTask = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    console.log(tasksAfterDelete);
    setTask(tasksAfterDelete);
  };

  const handleOnDeleteAllTasks = () => {
    tasks.length = 0;
    setTask([...tasks]);
  };

  const handleIsFav = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFav = !newTasks[taskIndex].isFav;
    setTask(newTasks);
  };

  const handleSearch = (searchTerm) => {
    // this work can use reactUseEffet hooks
    console.log(searchTerm);
    const filtered = tasks.filter((task) => task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    setTask([...filtered]);
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {addTaskModal && <AddTaskModal onSave={handleAddEditTask} taskToUpdate={taskToUpdate} onCancel={handleCancel} />}

        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TastAction onAddTask={() => setAddTaskModal(true)} onDeleteAllTasks={handleOnDeleteAllTasks} />
          <TastLists tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} isFav={handleIsFav} />
        </div>
      </div>
    </section>
  );
}
