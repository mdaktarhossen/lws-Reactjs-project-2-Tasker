import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTasks from "./SearchTasks";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";

export default function TaskBord() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "First Task",
    description: "My name is md akter hosen",
    tags: ["react", "js", "java"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddTask(addedTask) {
    setTasks([...tasks, addedTask]);
    setShowAddModal(false);
  }
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {showAddModal && <AddTaskModal onSave={handleAddTask} />}
        <SearchTasks />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowAddModal(true)} />
          <TaskLists tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
