import SearchTasks from "./SearchTasks";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";

export default function TaskBord() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <SearchTasks />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskLists />
        </div>
      </div>
    </section>
  );
}
