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

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {addTaskModal && <AddTaskModal onSave={handleAddEditTask} taskToUpdate={taskToUpdate} onCancel={handleCancel} />}

        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TastAction onAddTask={() => setAddTaskModal(true)} />
          <TastLists tasks={tasks} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
}
