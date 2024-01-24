import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TastAction from "./TastAction";
import TastLists from "./TastLists";

export default function TaskBord() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Lear reacts",
    description: "lorem za ahosr",
    tags: ["Web", "React", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  const hadleAddTask = (newTask) => {
    console.log(`clickted this`, newTask);
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={hadleAddTask} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TastAction onAddClick={() => setShowAddModal(true)} />
          <TastLists tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
