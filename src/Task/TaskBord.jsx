import SearchTask from "./SearchTask";
import TastAction from "./TastAction";
import TastLists from "./TastLists";

export default function TaskBord() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TastAction />
          <TastLists />
        </div>
      </div>
    </section>
  );
}
