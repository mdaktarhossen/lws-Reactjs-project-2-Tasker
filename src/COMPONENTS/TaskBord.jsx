import { useState } from "react";
import EmpetyTask from "./EmpetyTasl";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

export default function TaskBord() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Lear reacts",
    description: "lorem za ahosr",
    tags: ["Web", "React", "js"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleOnSave = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
  };

  const handleDeletTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    console.log(taskAfterDelete);
    setTasks(taskAfterDelete);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleFav = (favId) => {
    const findIndex = tasks.findIndex((task) => task.id === favId);
    const newTask = [...tasks];
    newTask[findIndex].isFavorite = !newTask[findIndex].isFavorite;
    setTasks(newTask);
    console.log(findIndex);
  };
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    const fieltered = tasks.filter((task) => task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    console.log(fieltered);
    setTasks([...fieltered]);
  };
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {showModal && <TaskModal onSave={handleOnSave} taskToUpdate={taskToUpdate} />}
        <SearchTask onSearch={handleSearch} />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddTask={() => setShowModal(true)} />
          {tasks.length > 0 ? <TaskList tasks={tasks} onDelete={handleDeletTask} editTask={handleEditTask} onFav={handleFav} /> : <EmpetyTask />}
        </div>
      </div>
    </section>
  );
}
